import express from "express";
import cors from "cors";

import companyRoutes from "./routes/companyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/company", companyRoutes);

export default app;
