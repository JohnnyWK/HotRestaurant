// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let reserved = [];
let waiting = [];

// ROUTES
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "/reserve.html"))
})

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"))
})



app.listen(PORT, function(){
    console.log("listening on port 3000")
})

