import {Hono} from "hono";
import {tambahTugas, hapusTugas, detailTugas, ubahTugas, semuaTugas, tugasBerdasarkanIdPengguna, perbaruiStatus} from "../controller/tugas";
import {verifyToken} from "../middleware/verifyToken";

const tugas = new Hono()

tugas.post("/tambah", verifyToken(true) , tambahTugas)
tugas.get('/pengguna/:id',verifyToken(false), tugasBerdasarkanIdPengguna)
tugas.get("/detail/:id", verifyToken(false) , detailTugas)
tugas.get("/", verifyToken(true) , semuaTugas)
tugas.put('/ubah/status',verifyToken(false),perbaruiStatus)
tugas.put('/ubah/:id',verifyToken(true),ubahTugas)
tugas.delete('/hapus/:id',verifyToken(true),hapusTugas)

export default tugas;