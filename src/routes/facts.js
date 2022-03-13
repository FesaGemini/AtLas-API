const facts = require('../controller/FactsController');

module.exports = {
  route: "/facts",
  run: async(req, res) => {
    facts.sendFact(req, res)
  }
}
