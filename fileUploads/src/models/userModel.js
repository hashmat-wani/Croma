const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    profilePic: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("user", userSchema);
