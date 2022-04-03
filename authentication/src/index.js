const express = require("express");
const app = express();
const port = 6000;
const connect = require("./configs/db");
const { register, signin } = require("./controllers/authCon");
const postController = require("./controllers/postCon");

app.use(express.json());
app.post("/register", register);
app.post("/signin", signin);
app.use("/post", postController);
app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
