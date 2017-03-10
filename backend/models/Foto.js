var dotenv =require('dotenv').config();
var express = require('express');
const server = require('../server');
var config = require('../config');

const colores = ['purple','blue','green','yellow','orange','red'];
const PER_PAGE=6;

var Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: config.api_key,
      secret: config.secret

    };

//Retorna fotos recientes
exports.getAll= (req,res)=> {
  Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    flickr.photos.getRecent({
      api_key:flickrOptions.api_key,
      page: 1,
      per_page: 50,
      oauth_verifier:config.oauth_verifier
    }, function(err, result) {
      // result is Flickr's response
      console.log('Peticion Fotos: '+result);
      res.send(result.photos.photo);
    });
  });
}


//Retorna fotos según query
exports.getAllWithQuery= (req, res) =>
{
  Flickr.tokenOnly(flickrOptions, function (error, flickr)
  {
    console.log('query: '+req.params["query"] );
    flickr.photos.search({
      api_key: flickrOptions.api_key,
      page: 1,
      per_page: 10,
      oauth_verifier: config.oauth_verifier,
      safe: 1,
      sort: "relevance",
      text: req.params["query"]
    }, (err, data) =>
    {
      if (err) res.send(err);
      console.log("Got flickr data sending it");
      res.send(data.photos.photo);
    });
  });
}
//Implementación recursiva para realizar peticiones y retornar fotos según una consulta (esta función no esta en uso)
exports.getAllWithQueryColors= (req, res) =>
{
  var data=[];
  recursiva(req,res,data,0);
}

function recursiva(req,res,data,i)
{
  if(i==colores.length)
  {
    res.send(data);
  }
  else
  {
    Flickr.tokenOnly(flickrOptions, function (error, flickr)
    {
      console.log('query: '+req.params["query"]+','+colores[i] );
      flickr.photos.search({
        api_key: flickrOptions.api_key,
        page: 1,
        per_page: 6,
        oauth_verifier: config.oauth_verifier,
        safe: 1,
        sort: "relevance",
        text: req.params["query"]+','+colores[i]
      }, (err, dataN) =>
      {
        if (err) res.send(err);
        console.log("Got flickr data sending it");
        dataN.photos.photo.map(fotoActual=>data.push(fotoActual));
        i++;

      });
    });
    recursiva(req,res,data,i)
  }
}
//Implementación ciclica para realizar peticiones y retornar fotos según una consulta (esta función no esta en uso)
exports.getAllWithQueryColors2= (req, res) =>
{
  var data = [];
  var contador = 0;
  for (let i = 0; i < colores.length; i++)
  {
    Flickr.tokenOnly(flickrOptions, function (error, flickr)
    {
      console.log('query: ' + req.params["query"] + ',' + colores[i]);
      flickr.photos.search({
        api_key: flickrOptions.api_key,
        page: 1,
        per_page: 6,
        oauth_verifier: config.oauth_verifier,
        safe: 1,
        sort: "relevance",
        text: req.params["query"] + ',' + colores[i]
      }, (err, dataN) =>
      {
        if (err) res.send(err);
        console.log("Got flickr data sending it");
        dataN.photos.photo.map(fotoActual => data.push(fotoActual));
        contador++;
        console.log(contador);
        if(contador==colores.length)
        {
          res.send(data);
        }
      });
    });
  }
}

//Se pudo haber hecho con axios.all, las dos soluciones funcionan semejante pues las peticiones no se bloquean entre si y solo se responde cuando todas culminaron
//Función que retorna fotos ordenadas según color según una query
exports.getAllWithQueryColors3=(req,res)=>{
var contador=0;
var data=[];
  colores.map((colorActual,i)=>{
    Flickr.tokenOnly(flickrOptions, function (error, flickr)
    {
      console.log('query: ' + req.params["query"] + '' + colores[i]);
      flickr.photos.search({
        api_key: flickrOptions.api_key,
        page: 1,
        per_page: PER_PAGE,
        oauth_verifier: config.oauth_verifier,
        safe: 1,
        sort: "relevance",
        text: req.params["query"] + ' ' + colores[i]
      }, (err, dataN) =>
      {
        if (err) res.send(err);
        console.log("Got flickr data sending it");
        dataN.photos.photo.map((fotoActual,i2) =>{ data[i+(i2*PER_PAGE)]=(fotoActual)});
        contador++;
        console.log(contador);
        if(contador==colores.length)
        {
          res.send(data);
        }
      });
    });
  });


}
