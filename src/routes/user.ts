import {Hono} from "hono";
import {create, detailUser, performaBulanan, performaBulananById, performaMingguan, performaMingguanById, profile, semuaTim} from "../controller/user";
import {verifyToken} from "../middleware/verifyToken";

const user = new Hono()

user.get('/',verifyToken(true), semuaTim)
user.get('/profile',verifyToken(false), profile )
user.post('/create', verifyToken(true) ,create)
user.get('/detail',verifyToken(false),detailUser)
user.get('/mingguan',verifyToken(true),performaMingguan)
user.get('/mingguan/:id',verifyToken(false),performaMingguanById)
user.post('/bulanan',verifyToken(true),performaBulanan)
user.post('/bulanan/:id',verifyToken(false),performaBulananById)

export default user;