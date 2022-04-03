const Gallery = require("../models/galleryModel");
const { check, validationResult } = require("express-validator");
const uploadFiles = require("../middlewares/uploads");
const express = require("express");
const router = express.Router();
const { unlink } = require("fs");

router.post(
  "",
  uploadFiles("userImages", "multiple"),
  check("userId").notEmpty().withMessage("userId required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
      deleteFiles(filePaths, (err) => {
        if (err) throw err;
        console.log("all files Removed");
      });
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });
      const gallery = await Gallery.create({
        userImages: filePaths,
        userId: req.body.userId,
      });
      res.status(200).send(gallery);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
);

const deleteFiles = (files, cb) => {
  let i = files.length;
  files.forEach((filePath) => {
    unlink(filePath, (err) => {
      i--;
      if (err) {
        cb(err);
        return;
      } else if (i <= 0) {
        cb(null);
      }
    });
  });
};
module.exports = router;
