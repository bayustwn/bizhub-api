import {Hono} from "hono";
import {addTugas, deleteTugas, detailTugas, semuaTugas, tugasByUserId} from "../controller/tugas";
import {verifyToken} from "../middleware/verifyToken";

const tugas = new Hono()

tugas.post("/add", verifyToken(true) , addTugas)
tugas.get('/user/:id',verifyToken(false), tugasByUserId)
tugas.get("/detail/:id", verifyToken(false) , detailTugas)
tugas.get("/", verifyToken(true) , semuaTugas)
tugas.delete('/delete/:id',verifyToken(true),deleteTugas)

export default tugas;