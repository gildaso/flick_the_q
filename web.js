var express = require('express');
var app = express();
app.use(express.static("" + __dirname + "/dist"));
app.all('*', function(res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(process.env.PORT || 9000, function () {
  console.log("Listening 9000")
});



var Flickr = require("flickrapi"),
  flickrOptions = {
    api_key: "3ce1185cfc2e9ca9a9da54b6b8df9e87",
    secret: "e62ba9fc0032c285"
  };

var app2 = require('express')();

app2.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app2.get('/search', function (req, res) {
  var query = req.query["q"];
  var page = (req.query["page"]) ? req.query["page"] : 1;
  var per_page = (req.query["per_page"]) ? req.query["per_page"] : 24

  // Flickr search API - sends the results from a classic tag search
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    flickr.photos.search({
      tags: query,
      page: page,
      per_page: per_page,
      in_gallery : true,
      media: "photos"
    }, function(err, result) {
      if(err) { throw new Error(err); }
      res.send(result);
    });
  });

});

app2.listen(3000, function () {
  console.log("Listening 3000")
});
