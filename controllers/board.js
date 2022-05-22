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
            const { writer_id, post_title, post_content } = req.body;
            const post = await pool.query(
                "insert into posts(writer_id, post_title, post_content) values (?, ?, ?) ",
                [writer_id, post_title, post_content]
            );

            return res.send("success");
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postPage(req, res) {
        try {
            return res.render("write");
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
            const { post_id } = req.params;
            const { writer_id, post_title, post_content } = req.body;
            const postUpdate = await pool.query(
                "update posts set writer_id=?, post_title=?, post_content=? where post_id=?",
                [writer_id, post_title, post_content, post_id]
            );
            const post = await pool.query("select * from posts ");
            return res.send(post[0]);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postModify(req, res) {
        try {
            const { post_id } = req.params;
            return res.render("modify");
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    async postDelete(req, res) {
        try {
            const { post_id } = req.params;
            const postDelete = await pool.query(
                "delete from posts where post_id=?",
                [post_id]
            );
            const post = await pool.query("select * from posts ");
            return res.send(post[0]);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}
module.exports = board;
