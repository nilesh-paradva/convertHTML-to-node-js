const express = require("express");
const path = require("path");
const app = express();
const port = 3001;

// route
const route = require("./routes/Routes.js");

// set ejs
app.set("view engine", "ejs");

// static path
app.use(express.static(path.join(__dirname, "public")));

// use routes from Routes.js
app.use("/", route);

// server start
app.listen(port, (err) => {
    if (!err) console.log(`Server is started at http://localhost:${port}`);
});