import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text("service attack")
});

app.post('/',async (c) => {
 const {text} = await c.req.json();
  return c.text(`this is your response: ${text.split('').reverse().join('')}`)
});
export default app
