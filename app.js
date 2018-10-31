const express = require("express");
const path = require("path");

const app = express();

app.set("vies", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
        res.render("index");
});

app.listen(3000, () => {
        console.log("server");
});
