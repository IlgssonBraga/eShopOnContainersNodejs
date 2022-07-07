import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server 2");
});

app.listen(3000);
