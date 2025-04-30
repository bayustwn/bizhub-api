import {Context} from "hono";
import prisma from "../../prisma/prisma";
import { z } from "zod";
import {responses, serverError} from "../utils/response";

const userSchema = z.object({
    nama :  z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    posisi :  z.string(),
})

export const create = async (ctx: Context) => {

    const {nama, email, password, posisi} = await userSchema.parseAsync(await ctx.req.json())

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
            return responses(ctx,201,true,"User berhasil dibuat!",user)
        }else{
            return responses(ctx,400,false,"User gagal dibuat!")
        }

    } catch (error) {
        return serverError(ctx)
    }

}