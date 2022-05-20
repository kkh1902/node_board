var express = require("express");
var router = express.Router();

const boardController = require("../controllers/board");
const board = new boardController();

/* 글 목록 */
router.get("/", board.inquery);

/* 글 작성하기 */
// router.get("/create", );  // 글 작성 페이지로 가라
router.post("/post", board.postCreate);

/* 글 상세 조회 */
router.get("/post/:post_id", board.postInquery);

/* 글 수정 */
router.patch("/post", board.postUpdate);

/* 글 삭제 */
router.delete("/post", board.postDelete);

module.exports = router;
