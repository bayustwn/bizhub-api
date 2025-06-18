import prisma from "../../prisma/prisma";
import {Context} from "hono";
import {sign} from "hono/jwt";
import { z } from "zod";
import {responses} from "../utils/response";

const skemaMasuk = z.object({
    email: z.string({ required_error: "Email wajib diisi" })
        .email("Format email tidak valid"),
    password: z.string({ required_error: "Password wajib diisi" })
});

export const masuk = async (konteks: Context) => {
    try {
        const { email, password } = await skemaMasuk.parseAsync(await konteks.req.json());

        const pengguna = await prisma.pengguna.findUnique({
            where: { email },
            select: { id: true, nama: true, posisi: true, email: true, password: true },
        });

        if (!pengguna) {
            return responses(konteks, 401, false, "Email atau password salah!");
        }

        const passwordValid = await Bun.password.verify(password, pengguna.password, "bcrypt");

        if (!passwordValid) {
            return responses(konteks, 401, false, "Email atau password salah!");
        }

        const payload = {
            id: pengguna.id,
            nama: pengguna.nama,
            email: pengguna.email,
            posisi: pengguna.posisi,
            exp: Math.floor(Date.now() / 1000) + (2 * 24 * 60 * 60),
        };

        const token = await sign(payload, `${Bun.env.SECRET_KEY}`, "HS256");

        return responses(konteks, 200, true, "Berhasil Login", {
            token : token,
            posisi : pengguna.posisi
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            const pesan = error.errors.map(e => e.message).join(', ');
            return responses(konteks, 400, false, pesan);
        }
        
        return responses(konteks, 500, false, "Server Error");

    }
};

