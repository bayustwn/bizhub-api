import { Hono } from "hono";
import { remove, upload } from "../controller/files";

const files = new Hono();

files.post("/upload",upload);
files.delete("/delete/:id",remove);

export default files;