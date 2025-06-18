import { Hono } from 'hono'
import autentikasi from "./routes/auth";
import pengguna from "./routes/user";
import tugas from "./routes/tugas";
import './cron/tugasTerlambat';
import {cors} from "hono/cors";
import berkas from './routes/files';
import notifikasi from './routes/notifikasi';

const app = new Hono()

app.use(cors())
app.route('/autentikasi',autentikasi)
app.route('/pengguna',pengguna)
app.route('/tugas',tugas)
app.route('/berkas', berkas)
app.route('/notifikasi', notifikasi)
app.get('/', (c) => {
  return c.text('Selamat datang di api Bizhub!')
})

const server = Bun.serve({
  fetch: app.fetch,
  port: 3000
})

console.log(`Server running on ${server.url}`)