import express from "express";
import upload from "../middleware/upload.js";
import {
  registerCompany,
  loginCompany,
  updateCompanyProfile,
  getAllCompanies
} from "../controllers/companyController.js";

const router = express.Router();

/* ✅ TEST ROUTE */
router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Company API is working 🚀"
  });
});

/* ✅ GET ALL COMPANIES */
router.get("/list", getAllCompanies);

router.post("/register", upload.single("photoUrl"), registerCompany);
router.post("/login", loginCompany);
router.put("/profile/:id", updateCompanyProfile);

export default router;
