const rev = require("../controller/reverseController")

module.exports = {
	route: "/reverse",
	run: async(req, res) => {
   rev.reverseText(req, res)
	}
}