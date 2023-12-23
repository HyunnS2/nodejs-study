const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

router.get("/", controller.main);
router.post("/register", controller.register);

module.exports = router;
