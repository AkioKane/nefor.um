import { Request, Response } from "express";

export async function indexRouterGet(req: Request, res: Response) {
  res.json({
    message: "Index router"
  });
}