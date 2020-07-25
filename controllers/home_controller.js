const Detail = require("../models/detail");

module.exports.home = function (req, res) {
  Detail.find({}, function (err, habits) {
    if (err) {
      console.log("error in fetching habits");
      return;
    }

    return res.render("home", {
      title: "home",
      habits: habits,
    });
  });
};

module.exports.build = function (req, res) {
  console.log(req.body);
  Detail.create(
    {
      title: req.body.title,
      subtitle: req.body.subtitle,
      track: ["None", "None", "None", "None", "None", "None", "None"],
      dailycount: 0,
      created: new Date(),
    },
    function (err, newHabit) {
      if (err) {
        console.log("error in creating a Habit");
        return;
      }
      console.log(`habit created:${newHabit.title}`);
    }
  );

  return res.redirect("back");
};

module.exports.destroy = function (req, res) {
  Detail.findByIdAndDelete(req.params.habitId, function (err, habit) {
    if (err) {
      console.log("error in deleting the Habit");
      return;
    }
    console.log("deletion success");
  });

  return res.redirect("back");
};
