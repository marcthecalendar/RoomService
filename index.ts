import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/", (_req: Request, res: Response) => {
    res.json({ status: "success" });
});

app.post("/", (_req: Request, res: Response) => {
    res.json({ status: "success" });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
