const ball = require("../controller/ballController")

module.exports = {
 route: "/8ball",
 run: async(req, res) => {
   ball.sendBall(req, res)
 }
}