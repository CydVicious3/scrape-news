console.log("html routes")
// DEPENDENCIES
// Include the path package to get the correct file path for our html
var path = require("path");

// ROUTING
module.exports = function (app) {

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  app.get("/news", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/savedNews.html"));
  });
  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};
