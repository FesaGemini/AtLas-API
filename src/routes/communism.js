const communistController = require("../controller/communismController")

module.exports = { 
	route: "/communism",
	run: async(req, res) => {
    communistController.control(req, res)
	}
}