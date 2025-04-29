import {Context, Next} from "hono";
import { verify} from "hono/jwt";
import prisma from "../../prisma/prisma";
import { z } from "zod";

const jwtPayloadSchema = z.object({
    id: z.string(),
    nama: z.string(),
    email: z.string(),
    posisi: z.string(),
});

const verifyToken = async (ctx :Context,next: Next)=>{
    const token = ctx.req.header("authorization")?.split(' ')[1];

    if (!token) {
        return ctx.json({
            success: false,
            message: "Token tidak valid!"
        }, 401);
    }

    const payload = await verify(token,`${Bun.env.SECRET_KEY}`);
    const data = await jwtPayloadSchema.parseAsync(payload)

    try {
        const user = await prisma.user.findUnique({
            where : {
                id : data.id
            }, select : {
                id : true,
                nama : true,
                email : true,
                posisi : true,
            }
        })

        if(user) {
            ctx.set("user_data",user)
            await next()
        }else{
            return ctx.json({
                success : false,
                message : "Tidak diizinkan!"
            },401)
        }

    }catch(error) {
        return ctx.json({
            success: false,
            message: "Server Error!",
        },500)
    }

}