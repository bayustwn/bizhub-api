import {Hono} from "hono";
import {create, detailUser, profile} from "../controller/user";
import {verifyToken} from "../middleware/verifyToken";

const user = new Hono()

user.get('/profile',verifyToken(false), profile )
user.post('/create', verifyToken(true) ,create)
user.get('/detail',verifyToken(false),detailUser)

export default user;