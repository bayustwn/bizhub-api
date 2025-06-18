import { z } from "zod";
import { responses, serverError } from "../utils/response";
import { Context } from "hono";
import prisma from "../../prisma/prisma";
import { status_map } from "../utils/status";
import { firebaseAdmin } from "../firebase/firebase-admin";
import { aturTenggat } from "../utils/aturTenggat";

export const skemaTugas = z.object({
  judul: z.string({ required_error: "Judul wajib diisi" }),
  brief: z.string({ required_error: "Brief wajib diisi" }),
  kuantitas: z.number({ required_error: "Kuantitas wajib diisi" }),
  deadline: z.string({ required_error: "Deadline wajib diisi" }),
  tugas_pengguna: z.array(
    z.object({
      id: z.string({ required_error: "Pekerja wajib diisi" }),
    }),
    { required_error: "Pekerja wajib diisi" }
  ),
});

const skemaStatus = z.object({
  id: z.string(),
  status: z.enum(["Dibuat", "Dikerjakan", "Revisi", "Selesai", "Ditinjau"]),
});

export const ubahTugas = async (konteks: Context) => {
  const hariIni: Date = new Date();
  const { judul, brief, kuantitas, deadline, tugas_pengguna } =
    await skemaTugas.parseAsync(await konteks.req.json());
  const id = konteks.req.param("id");
  const idAdmin = konteks.get("user_data").id;

  try {
    const tugasDiperbarui = await prisma.tugas.update({
      where: { id },
      data: {
        judul,
        brief,
        kuantitas,
        deadline: aturTenggat(deadline),
        id_admin: idAdmin,
        tanggal_diubah: hariIni,
        terlambat: aturTenggat(deadline) < hariIni,
      },
    });

    if (tugasDiperbarui) {
      await prisma.tugas_pengguna.deleteMany({
        where: { id_tugas: id },
      });

      for (const pengguna of tugas_pengguna) {
        await prisma.tugas_pengguna.create({
          data: {
            id: crypto.randomUUID(),
            id_user: pengguna.id,
            id_tugas: id,
          },
        });
      }

      const semuaUserId = [
        ...tugas_pengguna.map((ut) => ut.id),
        idAdmin
      ];
      const tokenNotifikasi = await prisma.token_notifikasi.findMany({
        where: {
          id_user: {
            in: semuaUserId.filter((id): id is string => id !== null),
          },
        },
        select: {
          token: true,
        },
      });

      tokenNotifikasi.map(async (token) => {
        const pesan = {
          notification: {
            title: "Tugas Diubah!",
            body: `${kuantitas} ${judul}`,
          },
          token: token.token,
        };

        await firebaseAdmin.messaging().send(pesan);
      });

      return responses(konteks, 200, true, "Tugas berhasil diperbarui!");
    } else {
      return responses(konteks, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    console.log(error);
    return serverError(konteks);
  }
};

export const tambahTugas = async (konteks: Context) => {
  const hariIni: Date = new Date();
  const { judul, brief, kuantitas, deadline, tugas_pengguna } =
    await skemaTugas.parseAsync(await konteks.req.json());
  const idAdmin = konteks.get("user_data").id;

  try {
    const tugasBaru = await prisma.tugas.create({
      data: {
        id: crypto.randomUUID(),
        judul: judul,
        brief: brief,
        kuantitas: kuantitas,
        deadline: aturTenggat(deadline),
        status: status_map.dibuat,
        id_admin: idAdmin,
        terlambat: aturTenggat(deadline) < hariIni
      },
    });

    if (!tugasBaru) {
      return responses(konteks, 400, false, "Gagal membuat tugas!");
    }

    await Promise.all(
      tugas_pengguna.map((pengguna) => {
        return prisma.tugas_pengguna.create({
          data: {
            id: crypto.randomUUID(),
            id_user: pengguna.id,
            id_tugas: tugasBaru.id,
          },
        });
      })
    );

    const semuaUserId = [
      ...tugas_pengguna.map((ut) => ut.id),
      idAdmin
    ];
    const tokenNotifikasi = await prisma.token_notifikasi.findMany({
      where: {
        id_user: {
          in: semuaUserId.filter((id): id is string => id !== null),
        },
      },
      select: {
        token: true,
      },
    });

    tokenNotifikasi.map(async (token) => {
      const pesan = {
        notification: {
          title: "Tugas Baru Dibuat!",
          body: `${kuantitas} ${judul}`,
        },
        token: token.token,
      };

      await firebaseAdmin.messaging().send(pesan);
    });

    return responses(konteks, 201, true, "Sukses membuat tugas!",tugasBaru.id);
  } catch (error) {
    return serverError(konteks);
  }
};

export const detailTugas = async (konteks: Context) => {
  const idTugas = konteks.req.param("id");

  try {
    const tugas = await prisma.tugas.findUnique({
      where: {
        id: idTugas,
      },
      include: {
        berkas: {
          select: {
            id: true,
            nama: true,
            nama_file: true,
            url: true,
          },
        },
        tugas_pengguna: {
          select: {
            pengguna: {
              select: {
                id: true,
                nama: true,
                email: true,
                posisi: true,
              },
            },
          },
        },
      },
    });

    if (tugas) {
      const daftarPengguna = tugas.tugas_pengguna.map((ut) => ut.pengguna);

      return responses(konteks, 200, true, "Sukses mendapatkan detail tugas!", {
        tugas: {
          ...tugas,
          tugas_pengguna: daftarPengguna,
        },
      });
    } else {
      return responses(konteks, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const tugasBerdasarkanIdPengguna = async (konteks: Context) => {
  const idPengguna = konteks.req.param("id");

  try {
    const daftarTugas = await prisma.tugas_pengguna.findMany({
      where: {
        id_user: idPengguna,
      },
      include: {
        tugas: {
          include: {
            tugas_pengguna: {
              where: {
                pengguna: {
                  posisi: {
                    not: "Admin",
                  },
                },
              },
              select: {
                pengguna: {
                  select: {
                    id: true,
                    nama: true,
                    email: true,
                    posisi: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (daftarTugas) {
      const hasil = daftarTugas.map((t) => ({
        ...t.tugas,
        tugas_pengguna: t.tugas.tugas_pengguna.map((ut) => ut.pengguna),
      }));

      return responses(
        konteks,
        200,
        true,
        "Sukses mendapatkan tugas berdasarkan user!",
        hasil
      );
    } else {
      return responses(konteks, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const hapusTugas = async (konteks: Context) => {
  const idTugas = konteks.req.param("id");

  try {
    const tugas = await prisma.tugas.findUnique({
      where: {
        id: idTugas,
      },
    });

    if (tugas) {
      const tugasPengguna = await prisma.tugas_pengguna.findMany({
        where: {
          id_tugas: idTugas,
        },
      });

      if (tugasPengguna.length > 0) {
        await prisma.tugas_pengguna.deleteMany({
          where: {
            id_tugas: idTugas,
          },
        });
      }

      await prisma.tugas.delete({
        where: {
          id: idTugas,
        },
      });

      return responses(konteks, 200, true, "Tugas berhasil dihapus!");
    } else {
      return responses(konteks, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const semuaTugas = async (konteks: Context) => {
  try {
    const daftarTugas = await prisma.tugas.findMany({
      include: {
        tugas_pengguna: {
          where: {
            pengguna: {
              posisi: {
                not: "Admin",
              },
            },
          },
          select: {
            pengguna: {
              select: {
                id: true,
                nama: true,
                email: true,
                posisi: true,
              },
            },
          },
        },
      },
      orderBy: {
        tanggal_diubah: "asc",
      },
    });

    const hasil = daftarTugas.map((t) => ({
      ...t,
      tugas_pengguna: t.tugas_pengguna.map((ut) => ut.pengguna),
    }));

    return responses(konteks, 200, true, "Sukses mengambil tugas", hasil);
  } catch (error) {
    return serverError(konteks);
  }
};

export const perbaruiStatus = async (konteks: Context) => {
  const { id, status } = await skemaStatus.parseAsync(await konteks.req.json());

  try {
    const tugasDiperbarui = await prisma.tugas.update({
      where: { id },
      data: { status },
    });

    if (tugasDiperbarui) {
      const tugasPengguna = await prisma.tugas_pengguna.findMany({
        where: { id_tugas: id },
      });

      const semuaUserId = [
        ...tugasPengguna.map((ut) => ut.id_user),
        tugasDiperbarui.id_admin
      ];
      const tokenNotifikasi = await prisma.token_notifikasi.findMany({
        where: {
          id_user: {
            in: semuaUserId.filter((id): id is string => id !== null),
          },
        },
        select: {
          token: true,
        },
      });

      tokenNotifikasi.map(async (token) => {
        const pesan = {
          notification: {
            title: "Status Tugas Diubah!",
            body: `${tugasDiperbarui.judul} - ${status}`,
          },
          token: token.token,
        };

        await firebaseAdmin.messaging().send(pesan);
      });

      return responses(konteks, 200, true, "Status tugas berhasil diperbarui!");
    } else {
      return responses(konteks, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(konteks);
  }
};
