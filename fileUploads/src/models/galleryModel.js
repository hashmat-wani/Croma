const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userImages: [String],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("gallery", gallerySchema);
