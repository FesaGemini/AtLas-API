const express = require("express");
const app = express();
app.use(express.json());
app.set('json spaces', 2)

require('./routes/index.js')(app)

app.get('/', async(req, res) => {
  res.status(200).json({ message: "AtLas-API V1 Ready." })
})
app.all('*', async(req, res, next) => {
    if (!res.headersSent) {
         console.log("No route is found. Send 404 response code.");
          res.status(404).end();
              }
          next();
})
app.use((err, req, res, next) => {
     console.error(err);
     res.status(500).json({ message: "Unexpected Server Error." });
     next();
});




app.listen(3000, async () => {
  console.log("[SERVER] AtLas-API V1 Ready")
})
