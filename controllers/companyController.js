import pool from "../config/db.js";
import bcrypt from "bcrypt";

/* ================= CREATE COMPANY ================= */
export const createCompany = async (req, res) => {
  try {
    const { company_name, email, password } = req.body;

    if (!company_name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO companies (company_name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, company_name, email`,
      [company_name, email, hashedPassword]
    );

    res.status(201).json({
      message: "Company created successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Create company error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

/* ================= GET ALL COMPANIES ================= */
export const getCompanies = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, company_name, email FROM companies ORDER BY id DESC"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Fetch companies error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
