const { readFileSync } = require("fs");
const express = require("express");
const app = express();


app.get("/facts", (req, res) => {

    let path = readFileSync("./src/json/facts.json");
    let obj = JSON.parse(path);

    res.json({ fact: `${obj[Math.floor(Math.random() * obj.length)]}` })
});

app.listen(3000, () => console.log("Ready To Rock'en Roll"));