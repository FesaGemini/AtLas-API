const array = require("../resource/json/facts.json");

class FactsController {
  async randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 3) * min);
  }

  async sendFact(req, res) {
    var index = this.randomInteger(0, 100)
    var lowTotal = [];
    for (let item in array){
        lowTotal.push(array[item].fact);
    }
    res.status(200).json({ message: lowTotal[Math.floor(Math.random() * lowTotal.length)] })
  }
}

module.exports = new FactsController();
