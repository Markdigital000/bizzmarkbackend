import axios from "axios";

const API_BASE = "http://srv1235061.hstgr.cloud:5000";

// Axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// ---------- COMPANY APIs ----------

// Register company
export const registerCompany = (formData) => {
  return api.post("/api/companies/register", formData);
};

// Login company
export const loginCompany = (data) => {
  return api.post("/api/companies/login", data);
};

// Update company profile
export const updateCompanyProfile = (id, data) => {
  return api.put(`/api/companies/profile/${id}`, data);
};

export default api;
