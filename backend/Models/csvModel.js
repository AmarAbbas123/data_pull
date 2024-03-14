const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema(
  {
    // Corrected schema based on the presumed CSV structure
    Employee: Number, // Assuming this was a typo and correcting it to "Employee"
    linkedin: String,
    f_name: String,
    l_name: String,
    company: String,
    title: String,
    location: String,
    email: String,
    phone: String,
  },
  { timestamps: true }
);

const CSVModel = mongoose.model("CSVData", csvSchema);

module.exports = CSVModel;
