const { request } = require("express");
const httpStatus = require("http-status-codes");
const pool = require("../middleware/db");

class board {
    async inquery(req, res) {
        try {
            const posts = await pool.query("select * from posts ");

            return res.send(posts[0]);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postCreate(req, res) {
        try {
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postInquery(req, res) {
        try {
            const { post_id } = req.params;
            const post = await pool.query(
                "select writer_id, post_title, post_content from posts where post_id = ? ",
                [post_id]
            );
            return res.send(post[0]);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postUpdate(req, res) {
        try {
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postDelete(req, res) {
        try {
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
module.exports = board;
