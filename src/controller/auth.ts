import prisma from "../../prisma/prisma";
import {Context} from "hono";
import {sign} from "hono/jwt";
import { z } from "zod";
import {responses} from "../utils/response";

const loginSchema = z.object({
    email: z.string({ required_error: "Email wajib diisi" })
        .email("Format email tidak valid"),
    password: z.string({ required_error: "Password wajib diisi" })
});

export const login = async (ctx: Context) => {
    try {
        const { email, password } = await loginSchema.parseAsync(await ctx.req.json());

        const user = await prisma.user.findUnique({
            where: { email },
            select: { id: true, nama: true, posisi: true, email: true, password: true },
        });

        if (!user) {
            return responses(ctx, 401, false, "Email atau password salah!");
        }

        const isPasswordValid = await Bun.password.verify(password, user.password, "bcrypt");

        if (!isPasswordValid) {
            return responses(ctx, 401, false, "Email atau password salah!");
        }

        const payload = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            posisi: user.posisi,
            exp: Math.floor(Date.now() / 1000) + (2 * 24 * 60 * 60),
        };

        const token = await sign(payload, `${Bun.env.SECRET_KEY}`, "HS256");

        return responses(ctx, 200, true, "Berhasil Login", {
            token : token,
            posisi : user.posisi
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            const messages = error.errors.map(e => e.message).join(', ');
            return responses(ctx, 400, false, messages);
        }
        
        return responses(ctx, 500, false, "Server Error");

    }
};

