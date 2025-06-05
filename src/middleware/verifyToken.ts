import { Context, Next } from "hono";
import { verify } from "hono/jwt";
import prisma from "../../prisma/prisma";
import { z } from "zod";
import { responses, serverError } from "../utils/response";

const jwtPayloadSchema = z.object({
    id: z.string(),
    nama: z.string(),
    email: z.string(),
    posisi: z.string(),
});

export const verifyToken = (admin: boolean) => {
    return async (ctx: Context, next: Next) => {
        const token = ctx.req.header("authorization")?.split(" ")[1];
        if (!token) {
            return responses(ctx, 401, false, "Token tidak valid!");
        }

        try {
            const payload = await verify(token, `${Bun.env.SECRET_KEY}`);
            const data = await jwtPayloadSchema.parseAsync(payload);

            const user = await prisma.user.findUnique({
                where: { id: data.id },
                select: { id: true, nama: true, email: true, posisi: true },
            });

            if (!user) {
                return responses(ctx, 401, false, "Tidak diizinkan!");
            }

            if (admin && user.posisi !== "Admin") {
                return responses(ctx, 403, false, "Tidak diizinkan!");
            }

            ctx.set("user_data", user);
            await next();
        } catch (error) {
            return serverError(ctx,"Jwt Expired!");
        }
    };
};
