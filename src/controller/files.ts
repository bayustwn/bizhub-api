import { createClient } from "@supabase/supabase-js";
import { Context } from "hono";
import { responses, serverError } from "../utils/response";
import prisma from "../../prisma/prisma";

const supabase = createClient(
  Bun.env.SUPABASE_URL || "",
  Bun.env.SUPABASE_SERVICE_KEY || ""
);

export const unggah = async (konteks: Context) => {
  const bucket = Bun.env.SUPABASE_BUCKET || "";
  const body = await konteks.req.parseBody();
  const berkas = Array.isArray(body['file[]']) ? body['file[]'] as File[] : [body['file[]'] as File];
  const id_tugas = body['id_tugas'] as string; 

  if (!berkas || berkas.length === 0) {
    return responses(konteks, 400, false, "File tidak ada!");
  }

  try {
    const berkasTerenkripsi = [];

    for (const file of berkas) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const namaFile = `${crypto.randomUUID()}-${file.name}`;

      const { error } = await supabase.storage
        .from(bucket)
        .upload(namaFile, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        return responses(konteks, 500, false, `Upload gagal: ${error.message}`);
      }

      const { data: dataUrl } = supabase.storage
        .from(bucket)
        .getPublicUrl(namaFile);

      const unggahFile = await prisma.berkas.create({
        data: {
          id: crypto.randomUUID(),
          nama: file.name,
          nama_file: namaFile,
          url: dataUrl.publicUrl,
          tanggal_upload: new Date(),
          id_tugas: id_tugas
        },
        select: {
          nama_file: true,
        },
      });

      berkasTerenkripsi.push(unggahFile);
    }

    return responses(konteks, 200, true, "File berhasil diupload", berkasTerenkripsi);
  } catch (error) {
    console.log(error)
    return serverError(konteks);
  }
};

export const hapus = async (konteks: Context) => {
  const bucket = Bun.env.SUPABASE_BUCKET || "";
  const { files } = await konteks.req.json();
  const id_tugas = konteks.req.param("id");

  if (!Array.isArray(files) || files.length === 0) {
    return responses(konteks, 400, false, "file tidak ada!");
  }

  try {
    const hapusFiles = await prisma.berkas.deleteMany({
      where: {
        id_tugas: id_tugas,
        nama_file: {
          in: files,
        },
      },
    });

    if (hapusFiles.count === 0) {
      return responses(konteks, 404, false, "File tidak ditemukan!");
    }

    const { error } = await supabase.storage.from(bucket).remove(files);

    if (error) {
      return responses(konteks, 500, false, `Gagal menghapus file di storage`);
    }

    return responses(konteks, 200, true, "File berhasil dihapus");
  } catch (error) {
    return serverError(konteks);
  }
};

