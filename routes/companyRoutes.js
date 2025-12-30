const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  registerCompany,
  loginCompany,
  updateCompanyProfile
} = require("../controllers/companyController");

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Company API is working 🚀"
  });
});

router.post("/register", upload.single("photoUrl"), registerCompany);
router.post("/login", loginCompany);
router.put("/profile/:id", updateCompanyProfile);

module.exports = router;
