const express = require('express');
const res = require('express/lib/response');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});

app.listen(3000, function() {
    console.log("Servidor corriendo")
});