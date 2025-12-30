const express = require("express");
const cors = require("cors");
const multer = require("multer");

const companyRoutes = require("./routes/companyRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROOT ROUTE
app.get("/", (req, res) => {
  res.send("🚀 Bizzmark Backend API is running");
});

// API ROUTES
app.use("/api/companies", companyRoutes);

module.exports = app;
