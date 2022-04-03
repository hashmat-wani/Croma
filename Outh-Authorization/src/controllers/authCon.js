const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.secret_key);
};
const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user)
      return res.status(500).send({ error: "Invalid email or password" });

    const match = await user.checkPassword(req.body.password);
    if (!match)
      return res.status(500).send({ error: "Invalid email or password" });

    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};
module.exports = { register, signin, newToken };
