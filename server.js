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
app.listen(PORT, function(){
    console.log("listening on port 3000")
})

let reserved = [];
let waiting = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

// ROUTES
// GET / --> index.html = here's some info about the restaurant
// GET /reservation ---> reservation.html
// GET /tables  --> tables

