var socket = io();

socket.on('connect', function() {
  console.log('Conectado al servidor');
});
//Escuchar informacion
socket.on('disconnect', function() {
  console.log('Perdimos conexión con el servidor');
});
//Enviar información
socket.emit('enviarMensaje', {
  usuario: 'Nidia',
  mensaje: 'Hola mundo'
}, function() {
  console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
  console.log('Servidor: ', mensaje);
});
