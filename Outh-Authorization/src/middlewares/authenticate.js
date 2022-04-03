const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((res, rej) => {
    jwt.verify(token, process.env.secret_key, (err, payload) => {
      if (err) return rej(err);
      return res(payload);
    });
  });
};

const authenticate = async (req, res, next) => {
  let bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer "))
    return res
      .status(400)
      .send({ error: "Authorization token not found or invalid" });
  const token = bearer.split(" ")[1];
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    res.status(400).send({ error: "Authorization token not found or invalid" });
  }
  req.id = payload.id;
  return next();
};

module.exports = authenticate;
