import app from "./app";

const mongoose = require("mongoose");
const port: number = 3000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/school-db");
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("failed to connect to db", error);
  }
}
main();
