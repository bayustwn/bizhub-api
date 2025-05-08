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

export const detailUser = async (ctx:Context) => {

    const id = ctx.req.param("id")

    try {

        const user = await prisma.user.findUnique({
            where : {
                id : id
            }, select : {
                id : true,
                nama : true,
                email : true
            }
        })

        if (user){
            return responses(ctx,200,true,"Berhasil mendapatkan detail user!",user)
        }else{
            return responses(ctx,404,false,"User tidak ada!")
        }



    }catch (error){
        return serverError(ctx)
    }

}

export const profile = async (ctx:Context) => {
    const user = ctx.get("user_data")

    try {

        const profile = await prisma.user.findUnique({
            where : {
                id : user.id
            },select:{
                id : true,
                nama : true,
                email : true,
                posisi : true
            }
        })

        if (profile) {
            return responses(ctx,200,true,"Profil user ditemukan",profile)
        }else{
            return responses(ctx,404,false,"Profil user tidak ditemukan")
        }

    }catch (error) {
        return serverError(ctx);
    }


}

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

export const performaMingguan = async(ctx: Context) => {

    try {

        const week = new Date();
        week.setDate(week.getDate() - 7);

        const userMingguan = await prisma.user.findMany({
            where: {
                posisi: {
                    not: "admin",
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

        if (userMingguan){
            return responses(ctx,200,true,"Sukses mengambil performa mingguan",userMingguan.sort((a, b) => b._count.user_tugas - a._count.user_tugas))
        }

    }catch (error) {
        return serverError(ctx);
    }
}

export const semuaTim = async(ctx:Context) =>{
    try {

        const  user = await prisma.user.findMany({
            where : {
                posisi : {
                    not : "admin"
                }
            },select : {
                id: true,
                nama : true,
                email : true,
                posisi : true,
                _count: {
                    select: {
                        user_tugas : true
                    },
                },
            }
        })

        if (user) {
            return responses(ctx,200,true,"Sukses mengambil semua user",user)
        }

    }catch (error) {
        return serverError(ctx);
    }
}