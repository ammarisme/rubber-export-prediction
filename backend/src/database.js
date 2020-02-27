// database.js
const mongoose = require("mongoose");
const dbPath = "mongodb://localhost:27017/rubber_export?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
mongoose.connect(dbPath, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("> error occurred from the database");
});
db.once("open", () => {
  console.log("> successfully opened the database");
});

module.exports = mongoose;
