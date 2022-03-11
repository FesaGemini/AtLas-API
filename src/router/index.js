const router = require("express").Router();
const Facts = require("../controller/FactsController");

router.get("/facts", (req, res) => {
    Facts.sendFact(req, res);
})

router.get("/", (req, res) => {
    res.status(200).json({ message: "AtLas-API V1 Ready." })
});

module.exports = router;