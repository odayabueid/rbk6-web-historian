var path = require("path");
var archive = require("../helpers/archive-helpers");
var fs = require("fs");

// require more modules/folders here!

exports.handleRequest = function(req, res) {
  // if (req.method === "GET") {
  //   fs.readFile("web/public/index.html", function(err, data) {
  //     res.end(data);
  //   });
  // }

  res.end(archive.paths.list);
};
