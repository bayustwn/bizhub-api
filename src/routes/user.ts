import {Hono} from "hono";
import {create, detailUser, hapusAnggota, performaBulanan, performaBulananById, performaMingguan, performaMingguanById, posisi, profile, semuaTim} from "../controller/user";
import {verifyToken} from "../middleware/verifyToken";

const user = new Hono()

user.get('/',verifyToken(true), semuaTim)
user.get('/profile',verifyToken(false), profile )
user.post('/create', verifyToken(true) ,create)
user.delete('/hapus',verifyToken(true),hapusAnggota)
user.get('/detail',verifyToken(false),detailUser)
user.get('/posisi',verifyToken(false),posisi)
user.get('/mingguan',verifyToken(true),performaMingguan)
user.get('/mingguan/:id',verifyToken(false),performaMingguanById)
user.post('/bulanan',verifyToken(true),performaBulanan)
user.post('/bulanan/:id',verifyToken(false),performaBulananById)

export default user;