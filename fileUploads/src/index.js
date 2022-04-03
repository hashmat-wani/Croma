const express = require("express");
const userController = require("./controllers/userCon");
const galleryController = require("./controllers/galleryCon");

const app = express();
app.use(express.json());

app.use("/user", userController);
app.use("/gallery", galleryController);

module.exports = app;
