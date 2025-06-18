import { Hono } from "hono";
import { tambahAnggotaNotif } from "../controller/notif";

const notifikasi = new Hono();

notifikasi.post("/tambah", tambahAnggotaNotif)

export default notifikasi;