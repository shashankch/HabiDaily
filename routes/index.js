const express = require("express");

const router = express.Router();
router.use("/", require("./track"));
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

router.post("/habit", homeController.build);

router.get("/delete/:habitId", homeController.destroy);

module.exports = router;
