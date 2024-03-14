const express = require("express");
const multer = require("multer");
const CSVModel = require("../models/csvModel");
const csvtojson = require("csvtojson");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const jsonArray = await csvtojson().fromFile(req.file.path);
    await CSVModel.insertMany(jsonArray);
    res.status(200).json(jsonArray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
