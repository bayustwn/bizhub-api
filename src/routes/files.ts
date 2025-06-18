import { Hono } from "hono";
import { hapus, unggah } from "../controller/files";
import { verifyToken } from "../middleware/verifyToken";

const berkas = new Hono();

berkas.post("/unggah",verifyToken(true),unggah);
berkas.delete("/hapus/:id",verifyToken(true),hapus);

export default berkas;