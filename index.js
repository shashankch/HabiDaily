// import express
const express = require("express");

// import path module
const path = require("path");

// setting port
const port = 8000;

// import express-ejs-layouts module
const expressLayouts = require("express-ejs-layouts");

// import mongodb  configuration
const db = require("./config/mongoose");

// import mongodb models
const Detail = require("./models/detail");

// initiate the express server
const app = express();

// setting directory for static files
app.use(express.static("assets"));

// setting parser to encode/decode form data
app.use(express.urlencoded({ extended: true }));

// setting views to use ejs-layouts
app.use(expressLayouts);

// set view engine ejs
app.set("view engine", "ejs");

// set the directory for view ejs files.
app.set("views", path.join(__dirname, "views"));

// set the route for the request
app.use("/", require("./routes"));

// listen on the port
app.listen(port, function (err) {
  if (err) {
    console.log("error:", err);
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port:${port}`);
});
