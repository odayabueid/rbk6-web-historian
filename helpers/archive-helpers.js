var fs = require("fs");
var path = require("path");
var _ = require("underscore");

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, "../web/public"),
  archivedSites: path.join(__dirname, "../archives/sites"),
  list: path.join(__dirname, "../archives/sites.txt")
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  fs.readFile(exports.paths.list, (err, data) => {
    var arr = data.toString().split("\n");

    if (err) {
      console.error(err);
      return;
    }

    console.log(arr);
    callback(arr);
  });
};

exports.isUrlInList = function(url, callback) {
  fs.readFile(exports.paths.list, (err, data) => {
    var arr = data.toString().split("\n");

    if (err) {
      console.error(err);
      return;
    }

    if (arr.includes(url)) {
      callback(true);
    } else {
      callback(false);
    }
  });
};

exports.addUrlToList = function(url, callback) {
  fs.appendFile(exports.paths.list, url, function(err) {
    if (err) throw err;
    console.log("saved");
    callback();
  });
};

exports.isUrlArchived = function(url, callback) {
  fs.exists(exports.paths.archivedSites + "/" + url, function(exists) {
    console.log(exports.paths.archivedSites);
    callback(exists);
  });
};

exports.downloadUrls = function(urls) {
  fs.readdir(exports.paths.archivedSites, (err, urls) => {});
};
