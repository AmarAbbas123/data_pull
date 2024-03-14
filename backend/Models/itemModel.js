const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Item", itemSchema);
