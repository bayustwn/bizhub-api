import { Hono } from "hono";
import { tambahAnggotaNotif } from "../controller/notif";

const notif = new Hono();

notif.post("/tambah", tambahAnggotaNotif)

export default notif;