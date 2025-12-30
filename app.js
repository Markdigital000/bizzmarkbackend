const express = require("express");
const cors = require("cors");
const multer = require("multer");

const companyRoutes = require("./routes/companyRoutes");

const app = express();
app.get("/", (req, res) => {
  res.send("🚀 Bizzmark Backend API is running");
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer();

// Routes
app.use("/api/companies", companyRoutes);

module.exports = app;
