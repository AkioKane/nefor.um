import express, { RequestHandler } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "./config/env";

import indexRouter from "./routes/indexRouter";

const app = express();

app.use(
  cors({
    origin: env.APP_URL || "http://localhost:3001",
    credentials: true,
  }) as RequestHandler,
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", indexRouter);

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(
    `🔧 Server initialized in ${process.env.NODE_ENV?.toUpperCase()} mode on ${PORT}`,
  );
});
