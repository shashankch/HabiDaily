const express = require("express");
const router = express.Router();

const weekController = require("../controllers/week_controller");

router.get("/week", weekController.tracker);
router.get("/update-status/:id/:day/:status", weekController.complete);

module.exports = router;
