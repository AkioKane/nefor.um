import { Router } from "express";
import { indexRouterGet } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexRouterGet);

export default indexRouter;