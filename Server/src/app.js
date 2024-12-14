import express, { urlencoded } from "express";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

import UserRouter from "./routes/User.routes.js";
import RequestRouter from "./routes/Request.routes.js";

app.use("/api/v1/", UserRouter);
app.use("/api/v1/", RequestRouter);

export { app };
