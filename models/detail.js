// import mongoose odm module
const mongoose = require("mongoose");

// creating the document schema
const detailSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  track: {
    type: [],
  },
  dailycount: {
    type: Number,
  },
  created: {
    type: Date,
  },
});

// creating model from schema
const Detail = mongoose.model("Detail", detailSchema);

// export the model
module.exports = Detail;
