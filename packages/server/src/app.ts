import Koa from "koa";
import { PORT } from "./config/constant";

const app = new Koa();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running...`);
});

export default app;
