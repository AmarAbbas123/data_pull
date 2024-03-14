const express = require("express");

const CSVModel = require("../models/csvModel");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Fetching data...");
  try {
    const data = await CSVModel.find();
    console.log(data); // To see what data is being returned
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
