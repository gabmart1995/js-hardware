const five = require('johnny-five');

/**
 * Función que genera un nuemro aleatorio entre el rango especificado 
 * @param {number} min rango minimo
 * @param {number} max rango maximo
 * @returns {number}
 */
function generateNumber( min, max ) {
	let value = Math.random() * ( max - min ) + min;
	value = Math.round( value );

	return value;
}

/**
 * Función que maneja la pulsacion del boton
 */
function pressButton() {

	const numberSelected = generateNumber( 1, 10 );
	intents = intents + 1;

	/*
		console.log( numberSelected );
		console.log({ numberSelected, winner });
	*/
	
	if ( numberSelected == winner ) {
		console.log(
			'felicidades, ganaste el juego en el intento n° %d', 
			intents 
		);
		
		process.exit( 0 ); // termina el programa

	} else {
		console.log(
			'lo siento el número %d no fue el ganador, vuelve a intentar',
			numberSelected
		);
	
	}
}

/**
 * Funcion que indica que la tabla lista para operar
 */
function readyBoard() {
	
	// le pasamos por el contructor el numero de puerto digital
	// donde se conecto el button.
	const button = new five.Button( 2 );

	// inyecta al repl de jhonny-five mi instancia del boton,
	// si la opcion repl esta activada
	if ( board.repl ) {
		
		board.repl.inject({
			button: button,
			board: board
		});
	}
	
	// evento cuando se presiona el boton en el proto-board del arduino
  	button.on("down", pressButton );

	/* 
		// evento que se dispara cuando se mantiene presionado el boton 1 / 2 segundo
		button.on("hold", function() {
			console.log("hold");
		});
	*/

	/* 
		// evento que se dispara cuando el boton se deja de pulsar
		button.on("up", function() {
			console.log("up");
		});
	*/

	// mostramos los mensajes de bienvenida
	console.log('Lotería por consola:');
	console.log('Pulse el botón para participar y ganar un premio');
}


// main.js

const winner = generateNumber( 1, 10 );
let intents = 0;

const board = new five.Board({ port: "COM3", repl: true });

// Event API 
board.on("ready", readyBoard );

// error handing
board.on('fail', function( event ) {
	console.log(
		'%s envio un mensaje de "error" mensaje: %s',
		event.class, 		// componente que fallo
		event.message		// mensaje de error
	);
});