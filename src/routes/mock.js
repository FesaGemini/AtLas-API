const mockController = require("../controller/mockController")

module.exports = {
  route: "/mock",
  run: async(req, res) => {
	 mockController.controlMock(req, res)
	}
}