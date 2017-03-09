// Modules
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

//Rutas
const routes = require('./routes/index');

//Configuración para el puerto de despliegue y API Keys
var config = require('./config');

//Parser para obtener info de los POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors());

// API
routes(app);

//Despliegue

  app.listen(config.port, function(){
    console.log('Desplegado en puerto'+config.port);
  });

