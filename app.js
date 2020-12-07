const express = require("express");
var app = express();

// --- routing
app.get("/", (req, res) => {
    res.render("index.html");
})