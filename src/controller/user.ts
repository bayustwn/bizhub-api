import {Context} from "hono";
import prisma from "../../prisma/prisma";

export const create = async (ctx: Context) => {

    const {nama, email, password, posisi} = await ctx.req.json()

    if (!nama || !email || !password || !posisi) {
        return ctx.json(
            {success: false, message: "Form harus diisi!"},
            400
        );
    }

    try {

        const user = await prisma.user.create({
            data: {
                id: crypto.randomUUID(),
                nama: nama,
                email: email,
                password: await Bun.password.hash(password, {
                    algorithm: 'bcrypt'
                }),
                posisi: posisi
            }, select: {
                id: true,
                nama: true,
                email: true,
                posisi: true
            }
        })

        if (user) {
            return ctx.json({
                success: true,
                message: "Success create user",
                data: user
            }, 201)
        }else{
            return ctx.json({
                success: true,
                message: "Error creating user",
                data: user
            }, 400)
        }

    } catch (error) {
        return ctx.json(
            {success: false, message: "Server Error"},
            500
        );
    }

}