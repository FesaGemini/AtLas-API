const struck = require("../controller/doubleStruckController")

module.exports = {
	route: "/doublestruck",
	run: async(req, res) => {
    struck.struck(req, res)
	}
}