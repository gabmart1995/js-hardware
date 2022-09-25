const { Board, Led } = require('johnny-five');

const board = new Board({ port: 'COM6' });

// tabla lista
board.on('ready', function() {
  const led = new Led({ pin: 13 });
  
  led.blink( 1000 );
});

board.on('fail', function( event ) {
  console.log(
    '%s envio un "fallo" mensaje: %s', 
    event.class, 
    event.message
  );
});