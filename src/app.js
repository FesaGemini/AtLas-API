require("module-alias/register");
const express = require("express");
const app = express();
const morgan = require('morgan');
const errHandler = require("./middleware/errorHandler");

app.use(express.json());
app.set('json spaces', 2)
app.use(errHandler)

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

app.set('json spaces', 2);
app.use(require("./routes/index.js"))
app.use(morgan('dev'))

app.listen(3000, async () => {
  console.log("[SERVER] AtLas-API V1 Ready \n[SERVER] Listening at port 3000")
})
