import {Hono} from 'hono'
import { masuk } from '../controller/auth'

const auth = new Hono()

auth.post("/masuk",masuk)

export default auth