const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controllers/userCont");

app.use("/user", userController);
module.exports = app;
