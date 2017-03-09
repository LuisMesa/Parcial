var dotenv =require('dotenv').config();
var express = require('express');
const server = require('../server');
var config = require('../config');

var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: config.api_key,
      secret: config.secret,
      user_id:config.user_id,
      access_token:config.access_token,
      access_token_secret:config.access_token_secret
    };


exports.getAll= (req,res)=> {
  Flickr.authenticate(flickrOptions, function(error, flickr) {
    flickr.photos.getRecent({
      api_key:flickrOptions.api_key,
      page: 1,
      per_page: 50,
      oauth_verifier:config.oauth_verifier
    }, function(err, result) {
      // result is Flickr's response
      console.log('Peticion Fotos: '+result);
      res.send(result);
    });
  });
}

exports.getAllWithQuery= (req, res) =>
{
  Flickr.authenticate(flickrOptions, function (error, flickr)
  {
    console.log('query: '+req.params["query"] );
    flickr.photos.search({
      api_key: flickrOptions.api_key,
      page: 1,
      per_page: 50,
      oauth_verifier: config.oauth_verifier,
      safe: 1,
      sort: "relevance",
      text: req.params["query"]
    }, (err, data) =>
    {
      if (err) res.send(err);
      console.log("Got flickr data sending it");
      res.send(data);
    });
  });
}

// exports.get= (req,res)=> {
//   //https://www.flickr.com/photos/{user-id}/{photo-id}
// var url ='https://www.flickr.com/photos/'+req.params.user_id+'/'+req.params.photo_id;
//   console.log('Peticion Foto: '+url);
//   Flickr.authenticate(flickrOptions, function(error, flickr) {
//     flickr.photos.getRecent({
//       api_key:flickrOptions.api_key,
//       page: 1,
//       per_page: 50,
//       oauth_verifier:'307-035-246'
//     }, function(err, result) {
//       // result is Flickr's response
//       console.log('Peticion Fotos: '+result);
//       res.send(result);
//     });
//   });
// }
