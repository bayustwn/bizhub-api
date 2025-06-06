import { Context } from "hono";
import prisma from "../../prisma/prisma";
import { z } from "zod";
import { responses, serverError } from "../utils/response";

const userSchema = z.object({
  nama: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  posisi: z.string(),
});

const dateSchema = z.object({
  bulan: z.number(),
  tahun: z.number(),
});

export const detailUser = async (ctx: Context) => {
  const id = ctx.req.param("id");

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nama: true,
        email: true,
      },
    });

    if (user) {
      return responses(
        ctx,
        200,
        true,
        "Berhasil mendapatkan detail user!",
        user
      );
    } else {
      return responses(ctx, 404, false, "User tidak ada!");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const profile = async (ctx: Context) => {
  const user = ctx.get("user_data");

  try {
    const profile = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        nama: true,
        email: true,
        posisi: true,
      },
    });

    if (profile) {
      return responses(ctx, 200, true, "Profil user ditemukan", profile);
    } else {
      return responses(ctx, 404, false, "Profil user tidak ditemukan");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const create = async (ctx: Context) => {
  const { nama, email, password, posisi } = await userSchema.parseAsync(
    await ctx.req.json()
  );

  try {
    const user = await prisma.user.create({
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

    if (user) {
      return responses(ctx, 201, true, "User berhasil dibuat!", user);
    } else {
      return responses(ctx, 400, false, "User gagal dibuat!");
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const performaBulanan = async (ctx: Context) => {
  try {
    const sekarang = new Date();

    const tahun = sekarang.getFullYear();
    const bulan = sekarang.getMonth();

    const tanggalMulai = new Date(tahun, bulan, 1);
    const tanggalSelesai = new Date(tahun, bulan + 1, 0, 23, 59, 59, 999);

    const users = await prisma.user.findMany({
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
        user_tugas: {
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
    const performa = users.map((user) => {
      const jumlahTerlambat = user.user_tugas.filter(
        (t) => t.tugas.terlambat
      ).length;

      console.log(jumlahTerlambat);

      let penilaian = "Baik";
      if (jumlahTerlambat > 5) penilaian = "Buruk";
      else if (jumlahTerlambat >= 2) penilaian = "Kurang";

      return {
        id: user.id,
        nama: user.nama,
        email: user.email,
        posisi: user.posisi,
        jumlah_tugas: user.user_tugas.length,
        jumlah_terlambat: jumlahTerlambat,
        penilaian,
      };
    });

    return responses(ctx, 200, true, "Berhasil Mendapatkan Performa", performa);
  } catch (error) {
    console.error(error);
    return serverError(ctx);
  }
};

export const performaBulananById = async (ctx: Context) => {
  const { bulan, tahun } = await dateSchema.parseAsync(await ctx.req.json());
  const id = ctx.req.param("id");

  try {
    const tanggalMulai = new Date(tahun, bulan - 1, 1);
    const tanggalSelesai = new Date(tahun, bulan, 0, 23, 59, 59, 999);

    const user = await prisma.user.findUnique({
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
        user_tugas: {
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
      ...user,
      bulan: bulan,
      tahun: tahun,
      user_tugas: user?.user_tugas.map((ut) => ut.tugas),
    };

    return responses(ctx, 200, true, "Berhasil Mendapatkan Performa", data);
  } catch (error) {
    console.error(error);
    return serverError(ctx);
  }
};

export const performaMingguanById = async (ctx: Context) => {
  const id = ctx.req.param("id");

  try {
    const week = new Date();
    week.setDate(week.getDate() - 7);

    const userMingguan = await prisma.user.findMany({
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
            user_tugas: {
              where: {
                tugas: {
                  tanggal_dibuat: {
                    gte: week,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (userMingguan) {
      return responses(
        ctx,
        200,
        true,
        "Sukses mengambil performa mingguan",
        userMingguan.sort((a, b) => b._count.user_tugas - a._count.user_tugas)
      );
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const performaMingguan = async (ctx: Context) => {
  try {
    const week = new Date();
    week.setDate(week.getDate() - 7);

    const userMingguan = await prisma.user.findMany({
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
            user_tugas: {
              where: {
                tugas: {
                  tanggal_dibuat: {
                    gte: week,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (userMingguan) {
      return responses(
        ctx,
        200,
        true,
        "Sukses mengambil performa mingguan",
        userMingguan.sort((a, b) => b._count.user_tugas - a._count.user_tugas)
      );
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const semuaTim = async (ctx: Context) => {
  try {
    const user = await prisma.user.findMany({
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
            user_tugas: {
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

    if (user) {
      return responses(ctx, 200, true, "Sukses mengambil semua user", user);
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const posisi = async (ctx: Context) => {
  try {
    const posisi = await prisma.posisi.findMany();

    if (posisi) {
      return responses(ctx, 200, true, "Sukses mendapatkan Posisi", posisi);
    }
  } catch (error) {
    return serverError(ctx);
  }
};

export const hapusAnggota = async(ctx:Context)=>{
  
  const id = ctx.req.param("id");

  try {
    const user = await prisma.user.findUnique({
      where : {
        id,
        AND : {
          posisi : {
            not : "Admin"
          }
        }
      }
    })

    if (user) {
      const hapus = await prisma.user.delete({
        where : {
          id
        }
      })

      if (hapus) {
        return responses(ctx,200,true,"Anggota berhasil dihapus!")
      }
    }else{
      return responses(ctx,404,false,"Anggota tidak ditemukan!")
    }
  } catch (error) {
    return serverError(ctx)
  }
}
