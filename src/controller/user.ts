import { Context } from "hono";
import prisma from "../../prisma/prisma";
import { z } from "zod";
import { responses, serverError } from "../utils/response";

const skemaPengguna = z.object({
  nama: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  posisi: z.string(),
});

const skemaEditPengguna = z.object({
  nama: z.string(),
  email: z.string().email(),
  password: z.string().min(8).optional(),
  posisi: z.string(),
});

const skemaTanggal = z.object({
  bulan: z.number(),
  tahun: z.number(),
});

export const ubahPengguna = async (konteks: Context) => {
  const id = konteks.req.param("id")

  try {
    const dataMasuk = await konteks.req.json()
    const { nama, email, posisi, password } = await skemaEditPengguna.parseAsync(dataMasuk)

    const penggunaDenganEmail = await prisma.pengguna.findFirst({
      where: {
        email: email,
        id: {
          not: id
        }
      }
    })

    if (penggunaDenganEmail) {
      return responses(konteks, 400, false, `Email '${email}' sudah terdaftar!`)
    }

    const dataPerubahan: any = { nama, email, posisi }

    if (password && password.trim() !== "") {
      dataPerubahan.password = await Bun.password.hash(password, {
        algorithm: "bcrypt"
      })
    }

    const penggunaDiubah = await prisma.pengguna.update({
      where: { id },
      data: dataPerubahan
    })

    if (penggunaDiubah) {
      return responses(konteks, 200, true, "Pengguna berhasil diubah!")
    } else {
      return responses(konteks, 400, false, "Pengguna gagal diubah!")
    }

  } catch (error: any) {
    console.error(error)
    
    if (error.code === 'P2002') {
      const emailFromError = error.meta?.target?.includes('email') ? 'email' : 'email'
      return responses(konteks, 400, false, `Email sudah terdaftar!`)
    }
    if (error.name === 'ZodError') {
      return responses(konteks, 400, false, error.errors.map((e: any) => e.message).join(', '))
    }
    
    return serverError(konteks)
  }
}

export const detailPengguna = async (konteks: Context) => {
  const id = konteks.req.param("id");

  try {
    const pengguna = await prisma.pengguna.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true
      },
    });

    if (pengguna) {
      return responses(
        konteks,
        200,
        true,
        "Berhasil mendapatkan detail user!",
        pengguna
      );
    } else {
      return responses(konteks, 404, false, "User tidak ada!");
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const profil = async (konteks: Context) => {
  const dataPengguna = konteks.get("user_data");

  try {
    const profilPengguna = await prisma.pengguna.findUnique({
      where: {
        id: dataPengguna.id,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
      },
    });

    if (profilPengguna) {
      return responses(konteks, 200, true, "Profil user ditemukan", profilPengguna);
    } else {
      return responses(konteks, 404, false, "Profil user tidak ditemukan");
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const buat = async (konteks: Context) => {
  const { nama, email, password, posisi } = await skemaPengguna.parseAsync(
    await konteks.req.json()
  );

  try {
    const penggunaBaru = await prisma.pengguna.create({
      data: {
        id: crypto.randomUUID(),
        nama: nama,
        email: email,
        password: await Bun.password.hash(password, {
          algorithm: "bcrypt",
        }),
        posisi: posisi,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
      },
    });

    if (penggunaBaru) {
      return responses(konteks, 201, true, "User berhasil dibuat!", penggunaBaru);
    } else {
      return responses(konteks, 400, false, "User gagal dibuat!");
    }
  } catch (error: any) {
  
    if (error.code === 'P2002') {
      return responses(konteks, 400, false, `Email '${email}' sudah terdaftar!`);
    }
    if (error.name === 'ZodError') {
      return responses(konteks, 400, false, error.errors.map((e: any) => e.message).join(', '));
    }

    return serverError(konteks)
  }
};

export const performaBulanan = async (konteks: Context) => {
  try {
    const sekarang = new Date();

    const tahun = sekarang.getFullYear();
    const bulan = sekarang.getMonth();

    const tanggalMulai = new Date(tahun, bulan, 1);
    const tanggalSelesai = new Date(tahun, bulan + 1, 0, 23, 59, 59, 999);

    const daftarPengguna = await prisma.pengguna.findMany({
      where: {
        posisi: {
          not: "Admin",
        },
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
        tugas_pengguna: {
          where: {
            tugas: {
              terlambat: true,
              tanggal_dibuat: {
                gte: tanggalMulai,
                lte: tanggalSelesai,
              },
            },
          },
          select: {
            tugas: true,
          },
        },
      },
    });
    const hasilPerforma = daftarPengguna.map((pengguna) => {
      const jumlahTerlambat = pengguna.tugas_pengguna.filter(
        (tugas) => tugas.tugas.terlambat
      ).length;

      console.log(jumlahTerlambat);

      let penilaian = "Baik";
      if (jumlahTerlambat > 5) penilaian = "Buruk";
      else if (jumlahTerlambat >= 2) penilaian = "Kurang";

      return {
        id: pengguna.id,
        nama: pengguna.nama,
        email: pengguna.email,
        posisi: pengguna.posisi,
        jumlah_tugas: pengguna.tugas_pengguna.length,
        jumlah_terlambat: jumlahTerlambat,
        penilaian,
      };
    });

    return responses(konteks, 200, true, "Berhasil Mendapatkan Performa", hasilPerforma);
  } catch (error) {
    console.error(error);
    return serverError(konteks);
  }
};

export const performaBulananById = async (konteks: Context) => {
  const { bulan, tahun } = await skemaTanggal.parseAsync(await konteks.req.json());
  const id = konteks.req.param("id");

  try {
    const tanggalMulai = new Date(tahun, bulan - 1, 1);
    const tanggalSelesai = new Date(tahun, bulan, 0, 23, 59, 59, 999);

    const pengguna = await prisma.pengguna.findUnique({
      where: {
        id: id,
        AND: {
          posisi: {
            not: "Admin",
          },
        },
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
        tugas_pengguna: {
          where: {
            tugas: {
              tanggal_dibuat: {
                gte: tanggalMulai,
                lte: tanggalSelesai,
              },
            },
          },
          select: {
            tugas: true,
          },
        },
      },
    });

    const data = {
      ...pengguna,
      bulan: bulan,
      tahun: tahun,
      tugas_pengguna: pengguna?.tugas_pengguna.map((ut) => ut.tugas),
    };

    return responses(konteks, 200, true, "Berhasil Mendapatkan Performa", data);
  } catch (error) {
    console.error(error);
    return serverError(konteks);
  }
};

export const performaMingguanById = async (konteks: Context) => {
  const id = konteks.req.param("id");

  try {
    const minggu = new Date();
    minggu.setDate(minggu.getDate() - 7);

    const penggunaMingguan = await prisma.pengguna.findMany({
      where: {
        id: id,
        AND: {
          posisi: {
            not: "Admin",
          },
        },
      },
      select: {
        nama: true,
        email: true,
        _count: {
          select: {
            tugas_pengguna: {
              where: {
                tugas: {
                  tanggal_dibuat: {
                    gte: minggu,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (penggunaMingguan) {
      return responses(
        konteks,
        200,
        true,
        "Sukses mengambil performa mingguan",
        penggunaMingguan.sort((a, b) => b._count.tugas_pengguna - a._count.tugas_pengguna)
      );
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const performaMingguan = async (konteks: Context) => {
  try {
    const minggu = new Date();
    minggu.setDate(minggu.getDate() - 7);

    const penggunaMingguan = await prisma.pengguna.findMany({
      where: {
        posisi: {
          not: "Admin",
        },
      },
      select: {
        nama: true,
        email: true,
        _count: {
          select: {
            tugas_pengguna: {
              where: {
                tugas: {
                  tanggal_dibuat: {
                    gte: minggu,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (penggunaMingguan) {
      return responses(
        konteks,
        200,
        true,
        "Sukses mengambil performa mingguan",
        penggunaMingguan.sort((a, b) => b._count.tugas_pengguna - a._count.tugas_pengguna)
      );
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const semuaTim = async (konteks: Context) => {
  try {
    const daftarPengguna = await prisma.pengguna.findMany({
      where: {
        posisi: {
          not: "Admin",
        },
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
        _count: {
          select: {
            tugas_pengguna: {
              where: {
                tugas: {
                  status: {
                    not: "Selesai",
                  },
                },
              },
            },
          },
        },
      },
    });

    if (daftarPengguna) {
      return responses(konteks, 200, true, "Sukses mengambil semua user", daftarPengguna);
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const posisi = async (konteks: Context) => {
  try {
    const daftarPosisi = await prisma.posisi.findMany();

    if (daftarPosisi) {
      return responses(konteks, 200, true, "Sukses mendapatkan Posisi", daftarPosisi);
    }
  } catch (error) {
    return serverError(konteks);
  }
};

export const hapusAnggota = async(konteks:Context)=>{
  
  const id = konteks.req.param("id");

  try {
    const pengguna = await prisma.pengguna.findUnique({
      where : {
        id,
        AND : {
          posisi : {
            not : "Admin"
          }
        }
      }
    })

    if (pengguna) {
      const hasilHapus = await prisma.pengguna.delete({
        where : {
          id
        }
      })

      if (hasilHapus) {
        return responses(konteks,200,true,"Anggota berhasil dihapus!")
      }
    }else{
      return responses(konteks,404,false,"Anggota tidak ditemukan!")
    }
  } catch (error) {
    return serverError(konteks)
  }
}
