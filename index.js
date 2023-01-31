const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const students = require("./data/students.json");

app.get("/", (req, res) => {
  res.send("অনিশ্চিতভাবে সার্ভার চলতেসে");
});
app.get("/students", (req, res) => {
  res.send(students);
});
app.listen(port, () => {
  console.log(`API is running on port: ${port}`);
});
