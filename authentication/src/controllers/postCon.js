const express = require("express");
const Post = require("../models/postModel");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.post("", authenticate, async (req, res) => {
  req.body.userId = req.id;
  try {
    const post = await Post.create(req.body);
    return res.status(200).send({ post });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.delete("/:postId", authenticate, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.postId);
    return res.status(200).send(post);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
