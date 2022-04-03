const User = require("../models/userModel");
const authorise = (permittedroles) => {
  return async (req, res, next) => {
    const user = await User.find({
      _id: req.id,
      roles: { $in: permittedroles },
    });
    if (user.length == 0)
      return res
        .status(401)
        .send({ error: "Your are not authorised to access this page" });
    return next();
  };
};
module.exports = authorise;
