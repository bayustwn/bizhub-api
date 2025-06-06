import cron from "node-cron";
import prisma from "../../prisma/prisma";
import { status_map } from "../utils/status";

async function setTerlambat() {
  const hariIni: Date = new Date();
  hariIni.setHours(0, 0, 0, 0);

  try {
    await prisma.tugas.updateMany({
      where: {
        deadline: {
          lt: hariIni,
        },
        status: {
          not: status_map.selesai,
        },
      },
      data: {
        terlambat: true,
      },
    });

    console.log(
      "Tugas terlambat berhasil diperbarui " +
        hariIni.toLocaleDateString("id-ID").split("/").join("-")
    );
  } catch (error) {
    console.error("Error update tugas terlambat: ", error);
  }
}

setTerlambat();

cron.schedule(
  "0 0 * * *",
  async () => {
    setTerlambat();
  },
  {
    timezone: "Asia/Jakarta",
  }
);
