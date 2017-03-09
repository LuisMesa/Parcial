const Foto = require('../models/foto');

module.exports = function(app)
{
//Test para el API
app.get('/',(req,res)=>{
  res.json(
    'Welcome to our API.'
    );
});

//Sub rutas
app.get('/fotos',Foto.getAll);
app.get('/fotos/:query',Foto.getAllWithQuery);
};
