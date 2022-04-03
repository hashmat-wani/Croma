const app = require("./index");
const connect = require("./configs/db");

app.listen(6500, async () => {
  try {
    await connect();
    console.log("Listening on port 6500");
  } catch (err) {
    console.log(err);
  }
});
