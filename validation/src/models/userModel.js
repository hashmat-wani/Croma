const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    pincode: Number,
    age: Number,
    gender: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = mongoose.model("user", userSchema);
