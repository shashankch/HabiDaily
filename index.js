const express = require("express");
const path = require("path");
const port = 8000;
const db = require("./config/mongoose");
const Detail = require("./models/detail");

const app = express();

app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/", require("./routes"));
app.listen(port, function (err) {
  if (err) {
    console.log("error:", err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
