import express from "express";
import cors from "cors";

const app = express();

// Allow cross-origin
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.json({ status: "online", message: "Verification API running" });
});

// Main verify endpoint
app.post("/verify", (req, res) => {
  const { purchase_code } = req.body || {};

  if (!purchase_code) {
    return res.status(400).json({
      status: "error",
      message: "purchase_code missing"
    });
  }

  // Hardcoded validation
  if (purchase_code !== "13072001") {
    return res.status(401).json({
      status: "error",
      message: "invalid purchase code"
    });
  }

  return res.status(200).json({
    status: "success",
    message: "valid",
    purchase_code
  });
});

// Wajib untuk Render.com
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
