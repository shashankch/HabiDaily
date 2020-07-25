const mongoose = require("mongoose");

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

const Detail = mongoose.model("Detail", detailSchema);

module.exports = Detail;
