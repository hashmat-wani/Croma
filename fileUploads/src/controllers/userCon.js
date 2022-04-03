const User = require("../models/userModel");
const { body, validationResult } = require("express-validator");
const uploadFiles = require("../middlewares/uploads");
const express = require("express");
const router = express.Router();
const { unlink } = require("fs");

router.post(
  "",
  uploadFiles("profilePic", "single"),
  body("firstName")
    .notEmpty()
    .withMessage("First Name required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should contain 3 to 30 characters"),
  body("lastName")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should contain 3 to 30 characters"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      deleteFile(req.file.path);
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        profilePic: req.file.path,
      });
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);

router.patch(
  "/:userId",
  uploadFiles("profilePic", "single"),
  async (req, res) => {
    try {
      if (req.file.path) {
        const user = await User.findById(req.params.userId).lean().exec();
        deleteFile(user.profilePic);
        user.profilePic = req.file.path;
        console.log(user.profilePic);
      }
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          profilePic: req.file.path,
        },
        {
          new: true,
        }
      )
        .lean()
        .exec();
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);

router.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).lean().exec();
    deleteFile(user.profilePic);
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const deleteFile = (filePath) => {
  unlink(filePath, (err) => {
    if (err) throw err;
    console.log("successfully deleted");
  });
};

module.exports = router;
