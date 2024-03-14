const express = require("express");
const multer = require("multer");
const CSVModel = require("../models/csvModel");
const csvtojson = require("csvtojson");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.delete("/api/delete/:id", async (req, res) => {
  try {
    const result = await CSVModel.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).send({ message: "Item deleted successfully" });
    } else {
      res.status(404).send({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error deleting item", error: error });
  }
});

module.exports = router;
