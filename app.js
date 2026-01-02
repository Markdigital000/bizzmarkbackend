import express from "express";
import cors from "cors";
import companyRoutes from "./routes/companyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

/* ✅ REGISTER ROUTES */
app.use("/api/companies", companyRoutes);

export default app;
