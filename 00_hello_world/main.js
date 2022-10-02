const five = require("johnny-five");

/**
 * Funcion que hace papadear un led cada 500ms
 */
function readyBoard() {
  
  let led = new five.Led( 13 );
  led.blink( 500 );
}

// main.js

const board = new five.Board({ port: "COM3" });

// Event API 
board.on( "ready", readyBoard );

// error handing
board.on('fail', function( event ) {
	
  console.log(
		'%s envio un mensaje de "error" mensaje: %s',
		event.class, 		// componente que fallo
		event.message		// mensaje de error
	);
});