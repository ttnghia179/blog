const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const handlebars = require("express-handlebars");

app.use(express.static(path.join(__dirname, "public")));

//Template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}");
});
