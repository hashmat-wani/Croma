const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Please upload jpef or png file only"), false);
  }
};
const uploads = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 3,
  },
});

// module.exports = uploads;

module.exports = (formKey, method) => {
  return function (req, res, next) {
    let uploadedItem;
    if (method === "single") {
      uploadedItem = uploads.single(formKey);
    } else if (method === "multiple") {
      uploadedItem = uploads.array(formKey, 3);
    }
    uploadedItem(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        res.status(500).send({ error: err.message });
      } else if (err) {
        res.status(501).send({ error: err.message });
      }
      next();
    });
  };
};
