const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
