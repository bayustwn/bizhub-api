import {Hono} from "hono";
import {create} from "../controller/user";
import {verifyToken} from "../middleware/verifyToken";

const user = new Hono()

user.post('/create', verifyToken(true) ,create)

export default user;