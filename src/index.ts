import { Hono } from 'hono'
import auth from "./routes/auth";
import user from "./routes/user";

const app = new Hono()

app.route('/auth',auth)
app.route('/user',user)
app.get('/', (c) => {
  return c.text('Selamat datang di api Bizhub!')
})

const server = Bun.serve({
  fetch: app.fetch,
  port: 3000
})

console.log(`Server running on ${server.url}`)