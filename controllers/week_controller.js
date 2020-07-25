const Detail = require("../models/detail");

module.exports.tracker = function (req, res) {
  Detail.find({}, function (err, habits) {
    if (err) {
      console.log("error in fetching habits");
      return;
    }

    return res.render("week", {
      title: "weekView",
      habits: habits,
    });
  });
};

function updateHabit(req, item) {
  var count = 0;
  for (let i of item.track) {
    if (i === "Done") {
      count++;
    }
  }

  item.track[req.params.day] = req.params.status;
  item.dailycount = count;
  Detail.findByIdAndUpdate(
    req.params.id,
    {
      track: item.track,
      dailycount: item.dailycount,
    },
    function (err, docs) {
      if (err) {
        console.log("error in updating the habit status");
        return;
      }

      console.log("update success");
    }
  );
}

module.exports.complete = function (req, res) {
  Detail.findById(req.params.id, function (err, item) {
    if (err) {
      console.log("error in fetching the habit");
      return;
    }
    updateHabit(req, item);
  });

  return res.redirect("back");
};
