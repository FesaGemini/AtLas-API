const array = require("../resource/json/facts.json");

class FactsController {
  async sendFact(req, res) {
    var lowTotal = [];
    for (let item in array){
        lowTotal.push(array[item]);
    }
    res.status(200).json({ message: lowTotal[Math.floor(Math.random() * lowTotal.length)] })
  }
}

module.exports = new FactsController();
