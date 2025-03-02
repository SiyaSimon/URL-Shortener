import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import urlRoutes from "./routes/urlRoutes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", urlRoutes);

export default app;

