
import { jsxRenderer } from 'hono/jsx-renderer';

const renderer = jsxRenderer(({ title , children }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
});

import { Hono } from "hono";

const app = new Hono();

app.use('*', renderer);

app.get("/", (c) => {
  return c.render(<>
<p>特定ツールです。マジで忙しいのでデザインとか何も考えず最小限の構成で作っています</p>
  </>, {
    title: "特定ツール",
  });
})

export default app;
