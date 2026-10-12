import express from "express"
import indexRouter from "./routes/indexRouter";

const app = express();

app.use("/api", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});