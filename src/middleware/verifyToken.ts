import { Context, Next } from "hono";
import { verify } from "hono/jwt";
import prisma from "../../prisma/prisma";
import { z } from "zod";
import { responses, serverError } from "../utils/response";

const skemaJwtPayload = z.object({
    id: z.string(),
    nama: z.string(),
    email: z.string(),
    posisi: z.string(),
});

export const verifyToken = (admin: boolean) => {
    return async (konteks: Context, next: Next) => {
        const token = konteks.req.header("authorization")?.split(" ")[1];
        if (!token) {
            return responses(konteks, 401, false, "Token tidak valid!");
        }

        try {
            const payload = await verify(token, `${Bun.env.SECRET_KEY}`);
            const data = await skemaJwtPayload.parseAsync(payload);

            const pengguna = await prisma.pengguna.findUnique({
                where: { id: data.id },
                select: { id: true, nama: true, email: true, posisi: true },
            });

            if (!pengguna) {
                return responses(konteks, 401, false, "Tidak diizinkan!");
            }

            if (admin && pengguna.posisi !== "Admin") {
                return responses(konteks, 403, false, "Tidak diizinkan!");
            }

            konteks.set("user_data", pengguna);
            await next();
        } catch (error) {
            return serverError(konteks,"Jwt Expired!");
        }
    };
};
