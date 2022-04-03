const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: { type: Array, default: ["customer"] },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});
userSchema.methods.checkPassword = function (password) {
  return new Promise((res, rej) => {
    bcrypt.compare(password, this.password, (err, match) => {
      if (err) return rej(err);
      return res(match);
    });
  });
};
module.exports = mongoose.model("user", userSchema);
