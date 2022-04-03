const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connect = require("./configs/db");
const { register, signin, newToken } = require("./controllers/authCon");
const productController = require("./controllers/productCon");
const usersController = require("./controllers/userCon");
const passport = require("./configs/oauth2");
app.use(express.json());
app.post("/register", register);
app.post("/signin", signin);
app.use("/product", productController);
app.use("/users", usersController);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    const token = newToken(req.user);
    res.status(200).send({ user: req.user, token });
  }
);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
