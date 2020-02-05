const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.listen(3000, async () => {
  console.log("listening on port 3000");
});