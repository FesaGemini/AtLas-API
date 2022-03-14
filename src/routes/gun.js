const { loadImage, createCanvas } = require('canvas');

module.exports = {
	route: "/gun",
	run: async(req, res) => {
				let http = /([(https)(http)]{3,9}:(?:\/\/)?)/;
		if(http.test(req.query.image) === false) return res.json({ message: 'Image links must start with https:// or http:// ' })
		if(!req.query.image) return res.json({ message: "Please provide an image link" })
		
 try {
    const background = await loadImage("/home/runner/AtLas-API/src/images/gun.png");
    const image = await loadImage(req.query.image);
    const canva = createCanvas(550, 550);
    const context = canva.getContext('2d');

    context.drawImage(image, 0, 0, 550, 550);
    context.drawImage(background, -70, 190, 350, 350);

    res.set({ 'Content-Type': 'image/png' });
    return res.status(200).send(canva.toBuffer());
  } catch (e) {
    return res.status(400).send({ message: e.message })
 }
 }
}