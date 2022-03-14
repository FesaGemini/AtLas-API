module.exports = {
	route: "/reverse",
	run: async(req, res) => {
		const text = req.query.text
		if(!text) return res.status(400).send({ message: "Provide a text to reverse" })
		let message = text.split("").reverse().join("")
		res.status(200).send({ text, message })
	}
}