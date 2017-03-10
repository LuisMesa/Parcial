# Parcial
Primer Parcial Web

En el repositorio se encuentra el backend y frontend de una aplicación hecha con react, node.js y express que busca imagenes en flicker en tiempo real y las muestra como un arcoiris

#Backend:

Descargue la carpeta backend y ejecute el siguiente comando en esta misma:

npm install

Para que el backend funcione correctamente requiere el archivo config.js con el siguiente formato:

module.exports = {
  'port': process.env.PORT || 1337,
  'api_key': "laAPIKey123",
  'secret': "elSecreto123",
  'user_id':"1234567@N04",
  'access_token':"1231237711231354-cc5123123213e",
  'access_token_secret':"c1237c7b1313123",
  'oauth_verifier': '123-123-123'
};

Nota: el archivo anterior no funcionara pues sus valores han sido alterados, pero ese es su formato.

Ahora puede desplegar el backend con:

nodemon server.js

Una vez realizado esto el backend esta escuchando en el puerto 1337, puede verificar que se encuentre desplegado en la siguiente URL:

http://localhost:1337/

API:

retorna fotos recientes de ficlkr:

http://localhost:1337/fotos                                   

retorna fotos de ficlkr según la consulta:

http://localhost:1337/fotos/:query              

retorna fotos de ficlkr según la consulta, además las fotos estan ordenadas por color, las primeras 6 moradas, las siguientes 6 azules y así..

http://localhost:1337/fotosColores/:query       

#Frontend:

Descargue la carpeta frontend y ejecute el siguiente comando en esta misma:

npm install

Ahora puede desplegar el frontend con:

npm start

Una vez realizado esto el frontend esta escuchando en el puerto 8081, puede verificar que se encuentre desplegado en la siguiente URL:

http://localhost:8081/

En la pagina web desplegada puede buscar cualquier termino, por ejemplo: landscape. Esta consulta le mostrara 36 imagenes ordenadas según su color.<strong>Como añadido extra se puede hacer click sobre una imagen y esto abrira la imagen en flickr.com</strong>
