const express = require("express");
const cors = require("cors");

const companyRoutes = require("./routes/companyRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROOT ROUTE (THIS WAS MISSING EFFECTIVELY)
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Bizzmark Backend is running 🚀"
  });
});


// API Routes
app.use("/api/companies", companyRoutes);

module.exports = app;
