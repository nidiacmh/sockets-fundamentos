const express = require('express');
const socketIO = require('socket.io');
//socket no trabaja en conjunto con express se necesita la siguiente importacion:
const http = require('http');
const path = require('path');
//Inicializando el express
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Inicializar el socket io
//IO = esta es la comunicacion del backend
module.exports.io = socketIO(server);
require('./sockets/socket.js');
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
