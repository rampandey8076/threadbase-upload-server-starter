import express from "express";
import upload from "../config/upload.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

const handleUpload = (req, res, next) => {
  upload.single("avatar")(req, res, (err) => {
    if (!err) return next();

    return res.status(400).json({
      error: err.code === "LIMIT_FILE_SIZE"
        ? "File too large (max 5MB)"
        : err.message || "Invalid upload",
    });
  });
};

router.post("/upload", verifyToken, handleUpload, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  return res.status(201).json({
    url: `/uploads/${req.file.filename}`,
  });
});

export default router;
