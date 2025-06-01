import { Hono } from "hono";
import { remove, upload } from "../controller/files";
import { verifyToken } from "../middleware/verifyToken";

const files = new Hono();

files.post("/upload",verifyToken(true),upload);
files.delete("/delete/:id",verifyToken(true),remove);

export default files;