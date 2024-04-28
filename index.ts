import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  const ip = c.req.raw.headers.get("x-real-ip");
  return c.text(`Your IP address is: ${ip}`);
});

export default app;
