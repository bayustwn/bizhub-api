import { Context } from "hono";
import { z } from "zod";
import { responses, serverError } from "../utils/response";
import prisma from "../../prisma/prisma";

const notifSkema = z.object({
    token: z.string({ required_error: "Token wajib diisi!" }),
    id_user: z.string({ required_error: "ID User wajib diisi!" }),
})

export const tambahAnggotaNotif = async (ctx: Context) => {
  const { token, id_user } = await notifSkema.parseAsync(await ctx.req.json());

  try {
    const notif = await prisma.token_notifikasi.upsert({
      where: { token: token },
      update: { id_user: id_user },
      create: {
        token: token,
        id_user: id_user,
      },
      select: {
        id_user: true,
      },
    });

    return responses(ctx, 201, true, "Token notifikasi berhasil ditambahkan atau diperbarui", notif);
  } catch (error) {
    return serverError(ctx);
  }
};