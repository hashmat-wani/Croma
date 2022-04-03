const express = require("express");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const authenticate = require("../middlewares/authenticate");
const authorise = require("../middlewares/authorise");
const router = express.Router();

router.post(
  "",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    req.body.userId = req.id;
    try {
      const product = await Product.create(req.body);
      return res.status(200).send({ product });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);

router.delete(
  "/:productId",
  authenticate,
  authorise(["admin", "seller"]),
  async (req, res) => {
    try {
      const product = await Product.find({ _id: req.params.productId })
        .lean()
        .exec();
      const user = await User.find({ _id: req.id, roles: { $in: ["admin"] } });
      if (product[0].userId == req.id || user.length != 0) {
        await Product.findByIdAndDelete(req.params.productId);
        return res.status(200).send(product);
      }
      return res
        .status(401)
        .send({ error: "This product is not created by u" });
    } catch (err) {
      return res.status(500).send({ error: err.message });
    }
  }
);

module.exports = router;
