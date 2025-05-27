import { z } from "zod";
import { responses, serverError } from "../utils/response";
import { Context } from "hono";
import prisma from "../../prisma/prisma";
import { status_map } from "../utils/status";
import { firebaseAdmin } from "../firebase/firebase-admin";

export const tugasSchema = z.object({
  judul: z.string({ required_error: "Judul wajib diisi" }),
  brief: z.string({ required_error: "Brief wajib diisi" }),
  kuantitas: z.number({ required_error: "Kuantitas wajib diisi" }),
  deadline: z.string({ required_error: "Deadline wajib diisi" }),
  user_tugas: z.array(
    z.object({
      id: z.string({ required_error: "Pekerja wajib diisi" }),
    }),
    { required_error: "Pekerja wajib diisi" }
  ),
});

const statusSchema = z.object({
  id: z.string(),
  status: z.enum(["Dibuat", "Dikerjakan", "Revisi", "Selesai", "Ditinjau"]),
});

export const editTugas = async (ctx: Context) => {
  const hariIni: Date = new Date();
  const { judul, brief, kuantitas, deadline, user_tugas } =
    await tugasSchema.parseAsync(await ctx.req.json());
  const id = ctx.req.param("id");
  const admin_id = ctx.get("user_data").id;

  try {
    const updatedTugas = await prisma.tugas.update({
      where: { id },
      data: {
        judul,
        brief,
        kuantitas,
        deadline: new Date(deadline),
        id_admin: admin_id,
        tanggal_diubah: hariIni,
        terlambat: new Date(deadline) < hariIni,
      },
    });

    if (updatedTugas) {
      await prisma.user_tugas.deleteMany({
        where: { id_tugas: id },
      });

      for (const user of user_tugas) {
        await prisma.user_tugas.create({
          data: {
            id: crypto.randomUUID(),
            id_user: user.id,
            id_tugas: id,
          },
        });
      }

      const token_notifikasi = await prisma.token_notifikasi.findMany({
        where: {
          id_user: {
            in: user_tugas.map((user) => user.id),
          },
        },
        select: {
          token: true,
        },
      });

      token_notifikasi.map(async (token) => {
        const message = {
          notification: {
            title: "Tugas Diubah!",
            body: `${kuantitas} ${judul}`,
          },
          token: token.token,
        };

        await firebaseAdmin.messaging().send(message);
      });

      return responses(ctx, 200, true, "Tugas berhasil diperbarui!");
    } else {
      return responses(ctx, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const addTugas = async (ctx: Context) => {
  const { judul, brief, kuantitas, deadline, user_tugas } =
    await tugasSchema.parseAsync(await ctx.req.json());
  const admin_id = ctx.get("user_data").id;

  try {
    const tugas = await prisma.tugas.create({
      data: {
        id: crypto.randomUUID(),
        judul: judul,
        brief: brief,
        kuantitas: kuantitas,
        deadline: new Date(deadline),
        status: status_map.dibuat,
        id_admin: admin_id,
      },
    });

    if (!tugas) {
      return responses(ctx, 400, false, "Gagal membuat tugas!");
    }

    await Promise.all(
      user_tugas.map((user) => {
        return prisma.user_tugas.create({
          data: {
            id: crypto.randomUUID(),
            id_user: user.id,
            id_tugas: tugas.id,
          },
        });
      })
    );

    const token_notifikasi = await prisma.token_notifikasi.findMany({
      where: {
        id_user: {
          in: user_tugas.map((user) => user.id),
        },
      },
      select: {
        token: true,
      },
    });

    token_notifikasi.map(async (token) => {
      const message = {
        notification: {
          title: "Tugas Baru Dibuat!",
          body: `${kuantitas} ${judul}`,
        },
        token: token.token,
      };

      await firebaseAdmin.messaging().send(message);
    });

    return responses(ctx, 201, true, "Sukses membuat tugas!");
  } catch (error) {
    return serverError(ctx);
  }
};

export const detailTugas = async (ctx: Context) => {
  const tugas_id = ctx.req.param("id");

  try {
    const tugas = await prisma.tugas.findUnique({
      where: {
        id: tugas_id,
      },
      include: {
        file: {
          select: {
            id: true,
            nama_file: true,
            url: true,
          },
        },
        user_tugas: {
          select: {
            user: {
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
      const users = tugas.user_tugas.map((ut) => ut.user);

      return responses(ctx, 200, true, "Sukses mendapatkan detail tugas!", {
        tugas: {
          ...tugas,
          user_tugas: users,
        },
      });
    } else {
      return responses(ctx, 404, false, "Tugas tidak ditemukan!");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const tugasByUserId = async (ctx: Context) => {
  const user_id = ctx.req.param("id");

  try {
    const tugas = await prisma.user_tugas.findMany({
      where: {
        id_user: user_id,
      },
      select: {
        id_tugas: true,
      },
    });

    if (!tugas || tugas.length === 0) {
      return responses(
        ctx,
        404,
        false,
        "Gagal mendapatkan tugas! atau tugas tidak ada"
      );
    }

    const semua_tugas = await Promise.all(
      tugas.map((tugass) =>
        prisma.tugas.findUnique({
          where: {
            id: tugass.id_tugas,
          },
          include: {
            user_tugas: {
              where: {
                user: {
                  posisi: {
                    not: "admin",
                  },
                },
              },
              select: {
                user: {
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
        })
      )
    );

    return responses(ctx, 200, true, "Sukses ambil tugas", semua_tugas);
  } catch (error) {
    return serverError(ctx);
  }
};

export const deleteTugas = async (ctx: Context) => {
  const tugas_id = ctx.req.param("id");

  try {
    const tugas = await prisma.tugas.delete({
      where: {
        id: tugas_id,
      },
    });

    if (tugas) {

        const user_tugas = await prisma.user_tugas.findMany({
      where: {
        id_tugas: tugas_id,
      },
    });

    const token_notifikasi = await prisma.token_notifikasi.findMany({
      where: {
        id_user: {
          in: user_tugas.map((user) => user.id_user),
        },
      },
      select: {
        token: true,
      },
    });

    token_notifikasi.map(async (token) => {
      const message = {
        notification: {
          title: "Tugas Dihapus!",
          body: `${tugas.kuantitas} ${tugas.judul}`,
        },
        token: token.token,
      };

      await firebaseAdmin.messaging().send(message);
    });

      return responses(ctx, 200, true, "Sukses menghapus tugas!");
    } else {
      return responses(ctx, 400, false, "Gagal menghapus tugas!");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const semuaTugas = async (ctx: Context) => {
  try {
    const tugas = await prisma.tugas.findMany({
      include: {
        user_tugas: {
          where: {
            user: {
              posisi: {
                not: "admin",
              },
            },
          },
          select: {
            user: {
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

    const hasil = tugas.map((t) => ({
      ...t,
      user_tugas: t.user_tugas.map((ut) => ut.user),
    }));

    return responses(ctx, 200, true, "Sukses mengambil tugas", hasil);
  } catch (error) {
    return serverError(ctx);
  }
};

export const updateStatus = async (ctx: Context) => {
  const { id, status } = await statusSchema.parseAsync(await ctx.req.json());

  try {
    const tugas = await prisma.tugas.findUnique({
      where: { id },
    });

    if (!tugas) {
      return responses(ctx, 404, false, "Tugas tidak ditemukan");
    } else {
      const hariIni: Date = new Date();

      const updateTugas = await prisma.tugas.update({
        where: { id },
        data: {
          status: status,
          tanggal_diubah: hariIni,
          terlambat:
            (tugas.deadline && tugas.deadline < hariIni) || tugas.terlambat,
        },
      });

      if (updateTugas) {
        const user_tugas = await prisma.user_tugas.findMany({
          where: { id_tugas: id },
        });

        const token_notifikasi = await prisma.token_notifikasi.findMany({
          where: {
            id_user: {
              in: user_tugas.map((user) => user.id_user),
            },
          },
          select: {
            token: true,
          },
        });

        await Promise.all(
          token_notifikasi.map(async (token) => {
            const message = {
              notification: {
                title: `Status Tugas Diperbarui ( ${tugas.status} )`,
                body: `${tugas.kuantitas} ${tugas.judul}`,
              },
              token: token.token,
            };

            await firebaseAdmin.messaging().send(message);
          })
        );

        return responses(ctx, 200, true, "Status tugas berhasil diperbarui");
      } else {
        return responses(ctx, 400, false, "Gagal memperbarui status tugas");
      }
    }
  } catch (error) {
    return serverError(ctx);
  }
};
