const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main); // GET /
router.get("/comments", controller.comments); // GET /comments
router.get("/comment/:id", controller.comment); // GET /comment/:id

module.exports = router;
