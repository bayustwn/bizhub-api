import {Hono} from 'hono'
import { login } from '../controller/auth'

const auth = new Hono()

auth.post("/login",login)

export default auth