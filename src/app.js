const express = require("express");

const app = express();
app.use(express.json());

app.use(require("./router"))

app.all("*", (req, res, next) => {
  if (!res.headersSent) {
    console.log("No route is found. Send 404 response code.");
    res.status(404).end();
  }
  next();
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: "Unexpected Server Error." });
  next();
});

app.use((req, res) => {
  console.info(
    `${req.hostname} ${req.method} ${req.originalUrl} ${res.statusCode}`
  );
});

app.listen(3000, () => console.log("Ready To Rock'en Roll"));
