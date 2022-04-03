const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/userModel");
const router = express.Router();

router.post(
  "",
  check("firstName").trim().notEmpty().withMessage("First Name is required"),
  check("lastName").trim().notEmpty().withMessage("Last Name is required"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please give valid email")
    .custom(async (value) => {
      const email = await User.findOne({ email: value }).lean().exec();
      if (email) {
        throw new Error("Email already in use");
      }
    }),
  check("pincode")
    .trim()
    .notEmpty()
    .withMessage("pincode is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("invalid pincode"),
  check("age")
    .trim()
    .notEmpty()
    .withMessage("age is required")
    .isNumeric({ min: 1, max: 100 })
    .withMessage("Invalid age"),
  check("gender")
    .trim()
    .notEmpty()
    .withMessage("Gender is Mandatory")
    .isIn(["Male", "Female", "others"])
    .withMessage("Invalid Gender"),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    try {
      const user = await User.create(req.body);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = router;
