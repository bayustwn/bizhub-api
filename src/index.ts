import { Hono } from 'hono'
import auth from "./routes/auth";
import user from "./routes/user";
import tugas from "./routes/tugas";
import './cron/tugasTerlambat';
import {cors} from "hono/cors";
import files from './routes/files';
import notif from './routes/notifikasi';

const app = new Hono()

app.use(cors())
app.route('/auth',auth)
app.route('/user',user)
app.route('/tugas',tugas)
app.route('/files', files)
app.route('/notif', notif)
app.get('/', (c) => {
  return c.text('Selamat datang di api Bizhub!')
})

const server = Bun.serve({
  fetch: app.fetch,
  port: 3000
})

console.log(`Server running on ${server.url}`)