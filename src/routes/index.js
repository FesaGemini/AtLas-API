const fs = require("fs");

module.exports = (app) => {
    //routes file reading system.
  fs.readdirSync(__dirname).forEach((files) => {
     if(files === 'index.js') return; //checking if file is index.js then return
     let fileNames = files.substr(0, files.indexOf('.'));
     const endpoints = require(`./${fileNames}`)
     app.get(endpoints.route, async(req, res) => {
           endpoints.run(req, res)
     })
  })
}
