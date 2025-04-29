import {Hono} from "hono";
import {create} from "../controller/user";

const user = new Hono()

user.post('/create',create)

export default user;