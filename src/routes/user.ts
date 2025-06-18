import {Hono} from "hono";
import {buat, detailPengguna, ubahPengguna, hapusAnggota, performaBulanan, performaBulananById, performaMingguan, performaMingguanById, posisi, profil, semuaTim} from "../controller/user";
import {verifyToken} from "../middleware/verifyToken";

const pengguna = new Hono()

pengguna.get('/',verifyToken(true), semuaTim)
pengguna.get('/profil',verifyToken(false), profil )
pengguna.post('/tambah', verifyToken(true) ,buat)
pengguna.delete('/hapus/:id',verifyToken(true),hapusAnggota)
pengguna.put('/ubah/:id',verifyToken(true), ubahPengguna)
pengguna.get('/detail/:id',verifyToken(false),detailPengguna)
pengguna.get('/posisi',verifyToken(false),posisi)
pengguna.get('/mingguan',verifyToken(true),performaMingguan)
pengguna.get('/mingguan/:id',verifyToken(false),performaMingguanById)
pengguna.post('/bulanan',verifyToken(true),performaBulanan)
pengguna.post('/bulanan/:id',verifyToken(false),performaBulananById)

export default pengguna;