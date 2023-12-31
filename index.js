const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log("Listening server on 3000...");
});
