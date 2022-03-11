const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.redirect("https://youtu.be/dQw4w9WgXcQ")
})

app.get("/facts", (req, res) => {
    let array = require("./src/json/facts.json").facts;
    res.json({ fact: `${array[~~(Math.random() * array.length)]}` })
});
app.listen(3000, () => console.log("Ready To Rock'en Roll"));
