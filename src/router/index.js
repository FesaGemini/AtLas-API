const router = require("express").Router();
const Facts = require("../controller/FactsController");

router.get("/facts", (req, res) => {
  Facts.sendFact(req, res);
});

router.get("/", (req, res) => {
  res.status(200).json({ message: "AtLas-API V1 Ready." });
});

router.all("*", (req, res, next) => {
  if (!res.headersSent) {
    console.log("No route is found. Send 404 response code.");
    res.status(404).end();
  }
  next();
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Unexpected Server Error." });
  next();
});

module.exports = router;
