/*
 * @Author: tianyu
 * @Date: 2023-04-13 14:19:32
 * @Description:
 */
const Koa = require("koa");
const log4js = require("log4js");
log4js.configure("./log4js.json");
log4js.level = "DEBUG";

const logger = log4js.getLogger("app");

const Router = require("koa-router");
const router = new Router();

const app = new Koa();

router.all("/", async (ctx) => {
  logger.info("on index page");
  ctx.body = `index page`;
});

router.all("/hello/:name", async (ctx) => {
  const { name } = ctx.params;
  logger.info("on hello page");
  ctx.body = `hello ${name ? name : "world"}`;
});

app.use(router.routes());

const port = process.env.PORT || 8000;
try {
  app.listen(port);
  logger.info(
    `Server started successfully and listened on http://localhost:${port}`
  );
} catch (err) {
  console.log(err);
  logger.error("app.listen failed");
}
