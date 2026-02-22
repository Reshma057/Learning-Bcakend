const express = require("express");
const connectToDatabase = require("./db/db");
require("dotenv").config();

const app = express();
connectToDatabase();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Shivani .. Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});