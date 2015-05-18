var Flickr = require("flickrapi"),
  flickrOptions = {
    api_key: "3ce1185cfc2e9ca9a9da54b6b8df9e87",
    secret: "e62ba9fc0032c285"
  };

var app = require('express')();

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', function (req, res) {
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

app.listen(3000, function () {
  console.log("Listening 3000")
});
