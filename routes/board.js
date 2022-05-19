var express = require("express");
var router = express.Router();

const boardController = require("../controllers/board");
const board = new boardController();

/* 글 목록 */
router.get("/", board.inquery);

module.exports = router;
