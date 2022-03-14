class mockController {
	async controlMock(req, res) {
	      const text = req.query.text;
      if(!text) res.json({ message: "Please Add the text parameter" });
      res.status(200).send({ text, message: generateMock(text) })
	}
}

function generateMock(txt) {
	var makeUpper = true;
	var chars = txt.toLowerCase().split('');
	var punc = [' ', "'", ',', '.'];
	for (var i = 0; i < chars.length; i++) {
		if (punc.includes(chars[i])) {
			continue;
		} else if (makeUpper) {
			chars[i] = chars[i].toUpperCase();
		}

		makeUpper = !makeUpper;
	}
	
	return chars.join('');
}

module.exports = new mockController()