const gunController = require("../controller/gunController")

module.exports = {
	route: "/gun",
	run: async(req, res) => {
    gunController.controlGun(req, res)
 }
}