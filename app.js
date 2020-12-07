const express = require("express");
var app = express();

// --- ROUTING
app.get("/", function(request, response){
    // Show index.html page
    response.render("index.html");
});