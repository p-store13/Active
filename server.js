import express from "express";
const app = express();

app.use(express.json());

app.post("/verify", (req, res) => {
  const { purchase_code } = req.body || {};

  if (!purchase_code) {
    return res.status(400).json({
      status: "error",
      message: "purchase_code missing"
    });
  }

  return res.status(200).json({
    status: "success",
    message: "valid",
    purchase_code
  });
});

// Healthcheck untuk Render
app.get("/", (req, res) => {
  res.send("Verification API is running.");
});

// PORT dari Render
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
