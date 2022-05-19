const { request } = require("express");
const httpStatus = require("http-status-codes");
const pool = require("../middleware/db");

class board {
    async inquery(req, res) {
        try {
            const posts = await pool.query("select * from posts ");

            return res.render("board", {
                posts: posts[0],
            });
        } catch (error) {
            console.error(error);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send([]);
        }
    }
}

module.exports = board;
