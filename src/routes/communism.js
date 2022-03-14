const communistController = require("../controller/communistController")

module.exports = { 
	route: "/communism",
	run: async(req, res) => {
    communistController.control(req, res)
	}
}