class ballControl {
  async sendBall(req, res) {
    const question = req.query.question;
    if (!question) return res.json({ error: "Ask me something" });

    const ball = ["I think so", "Yes", "No", "I guess", 'Maybe', "Good for you", "I'm just built differently", "Definitely", "Definitely Not", "I think so", "I dont think so", "I Didnt Ask", "Outlook good", "I dont care"]

    const message = ball[Math.floor(Math.random() * ball.length)];

    return res.status(200).json({ question, message })

  }
}

module.exports = new ballControl()