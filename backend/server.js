const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./dbConfig");
const fileUploadRoute = require("./routes/fileUpload");
const PullDataRoute = require("./routes/pullData");
const deletedataRoute = require("./routes/romoveData");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/upload", fileUploadRoute);
app.use("/api/pull", PullDataRoute);
app.use("/api/delete", deletedataRoute);

// MongoDB connection

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
