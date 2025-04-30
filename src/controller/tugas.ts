import { z } from "zod";
import {responses, serverError} from "../utils/response";
import {Context} from "hono";
import prisma from "../../prisma/prisma";
import {status_map} from "../utils/status";

const tugasSchema = z.object({
    judul: z.string().max(255),
    brief: z.string(),
    kuantitas: z.number(),
    deadline: z.string(),
    user_tugas: z.array(
        z.object({
            id :  z.string(),
        })
    )
})

export const addTugas = async (ctx: Context) => {

    const {judul,brief,kuantitas,deadline,user_tugas} = await tugasSchema.parseAsync(await ctx.req.json())
    const admin_id = ctx.get("user_data").id

    try {

        const tugas = await prisma.tugas.create({
            data : {
                id : crypto.randomUUID(),
                judul: judul,
                brief: brief,
                kuantitas: kuantitas,
                deadline: new Date(deadline),
                status: status_map.dibuat,
                id_admin :  admin_id,
            }
        })

        if (tugas){
            user_tugas.map(async (user)=>{
                await prisma.user_tugas.create({
                    data : {
                        id : crypto.randomUUID(),
                        id_user : user.id,
                        id_tugas : tugas.id
                    }
                })
            })

            return responses(ctx,201,true,"Tugas berhasil dibuat!")

        }else{
            return responses(ctx,400,false,"Gagal membuat tugas!")
        }

    }catch (error) {
        return serverError(ctx)
    }

}

export const tugasByid = async (ctx: Context) => {
    const user_id = ctx.req.param("id");

    try {
        const tugas = await prisma.user_tugas.findMany({
            where: {
                id_user : user_id
            },
            select : {
                id_tugas : true
            }
        });

        if (!tugas || tugas.length === 0) {
            return responses(ctx, 404, false, "Gagal membuat tugas! atau tugas tidak ada");
        }

        const semua_tugas = await Promise.all(
            tugas.map((tugass) =>
                prisma.tugas.findMany({
                    where: {
                        id: tugass.id_tugas
                    }
                })
            )
        );

        return responses(ctx, 200, true, "Sukses ambil tugas", semua_tugas);

    } catch (error) {
        return serverError(ctx);
    }
}

export const semuaTugas =  async (ctx: Context) => {

    try {

        const tugas =  await prisma.tugas.findMany()

        return  responses(ctx, 200, true, "Sukes mengambil tugas",tugas)

    }catch (error) {
        return  serverError(ctx);
    }

}
