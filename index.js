/*const express = require('express');*/
import express from "express";

const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => res.send("Hello from Home with nodemon");

const handleProfile = (req, res) => res.send("You are on my Profile");

const betweenHome = (req, rex, next) => {
    console.log("Between");
    next();
}

app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);