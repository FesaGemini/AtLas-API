const express = require("express");
const app = express();
app.use(express.json());
app.set('json spaces', 2);
app.use(require("./router"))

app.listen(3000, async () => {
  console.log("[SERVER] AtLas-API V1 Ready")
})
