const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Issue = require("../models/Issue");

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// POST → Create new issue
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const newIssue = new Issue({
      category: req.body.category,
      description: req.body.description,
      location:
        req.body.lat && req.body.lng
          ? { lat: req.body.lat, lng: req.body.lng }
          : null,
      image: req.file ? req.file.filename : null,
    });

    await newIssue.save();

    // ✅ Always return JSON
    res.json({ success: true, data: newIssue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

// GET → Fetch all issues
router.get("/", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json({ success: true, data: issues });
  } catch (err) {
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
