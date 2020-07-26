// import the express
const express = require("express");

// set up the express router
const router = express.Router();

// import week controller
const weekController = require("../controllers/week_controller");

// route to display the weekly progress
router.get("/week", weekController.tracker);

// route to update the weekly status of habit
router.get("/update-status/:id/:day/:status", weekController.complete);

// export the habit
module.exports = router;
