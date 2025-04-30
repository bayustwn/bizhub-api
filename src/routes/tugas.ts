import {Hono} from "hono";
import {addTugas, semuaTugas, tugasByid} from "../controller/tugas";
import {verifyToken} from "../middleware/verifyToken";

const tugas = new Hono()

tugas.post("/add", verifyToken(true) , addTugas)
tugas.get('/user/:id', tugasByid)
tugas.get("/", verifyToken(true) , semuaTugas)

export default tugas;