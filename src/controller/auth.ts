import prisma from "../../prisma/prisma";
import {Context} from "hono";
import {sign} from "hono/jwt";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export const login = async (ctx: Context) => {

    const {email, password} = await loginSchema.parseAsync(ctx.req.json());

    try {
        const user = await prisma.user.findFirst({
            where: {email: email},
            select: {id: true, nama: true, posisi: true, email: true , password: true},
        });

        if (!user) {
            return ctx.json(
                {success: false, message: "Email atau password salah!"},
                401
            );
        }

        const isPasswordValid = await Bun.password.verify(
            password,
            user.password,
            "bcrypt"
        );

        if (!isPasswordValid) {
            return ctx.json(
                {success: false, message: "Email atau password salah!"},
                401
            );
        }

        const payload = {
            id: user.id,
            nama: user.nama,
            email: user.email,
            posisi: user.posisi,
            exp: Math.floor(Date.now() / 1000) + (2 * 24 * 60 * 60),
        };

        const token = await sign(payload, `${Bun.env.SECRET_KEY}`, "HS256");

        return ctx.json(
            {
                success: true,
                message: "Berhasil Login",
                token
            },
            200
        );

    } catch (error) {
        return ctx.json(
            {success: false, message: "Server Error"},
            500
        );
    }
};