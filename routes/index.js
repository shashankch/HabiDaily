// import express module
const express = require("express");

// set up the express router
const router = express.Router();

// including other routes
router.use("/", require("./track"));

// import homecontroller
const homeController = require("../controllers/home_controller");

// set the route to homeController
router.get("/", homeController.home);

// route to create a habit
router.post("/habit", homeController.build);

// route to delete a habit
router.get("/delete/:habitId", homeController.destroy);

// export the router
module.exports = router;
