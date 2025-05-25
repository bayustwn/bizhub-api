import { createClient } from "@supabase/supabase-js";
import { Context } from "hono";
import { responses, serverError } from "../utils/response";
import prisma from "../../prisma/prisma";

const supabase = createClient(
  Bun.env.SUPABASE_URL || "",
  Bun.env.SUPABASE_SERVICE_KEY || ""
);

export const upload = async (ctx: Context) => {
  const bucket = Bun.env.SUPABASE_BUCKET || "";
  const formData = await ctx.req.formData();
  const files = formData.getAll("file") as File[];
  const id_tugas = formData.get("id_tugas") as string;

  if (!files || files.length === 0) {
    return responses(ctx, 400, false, "File tidak ada!");
  }

  try {
    const uploadedFiles = [];

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `${crypto.randomUUID()}-${file.name}`;

      const { error } = await supabase.storage
        .from(bucket)
        .upload(filename, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        return responses(ctx, 500, false, `Upload gagal: ${error.message}`);
      }

      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filename);

      const fileRecord = await prisma.file.create({
        data: {
          id: crypto.randomUUID(),
          nama_file: filename,
          url: urlData.publicUrl,
          tanggal_upload: new Date(),
          id_tugas: id_tugas,
        },
        select: {
          nama_file: true,
        },
      });

      uploadedFiles.push(fileRecord);
    }

    return responses(ctx, 200, true, "File berhasil diupload", uploadedFiles);
  } catch (error) {
    return serverError(ctx);
  }
};

export const remove = async (ctx: Context) => {
  const bucket = Bun.env.SUPABASE_BUCKET || "";
  const { files } = await ctx.req.json();
  const id_tugas = ctx.req.param("id");

  if (!Array.isArray(files) || files.length === 0) {
    return responses(ctx, 400, false, "Daftar nama file tidak ada!");
  }

  try {
    const hapusFiles = await prisma.file.deleteMany({
      where: {
        id_tugas: id_tugas,
        nama_file: {
          in: files,
        },
      },
    });

    if (hapusFiles.count === 0) {
      return responses(ctx, 404, false, "File tidak ditemukan!");
    }

    const { error } = await supabase.storage.from(bucket).remove(files);

    if (error) {
      return responses(ctx, 500, false, `Gagal menghapus file di storage`);
    }

    return responses(ctx, 200, true, "File berhasil dihapus");
  } catch (error) {
    return serverError(ctx);
  }
};

