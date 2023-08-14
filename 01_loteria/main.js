const { Board, Button } = require('johnny-five');

/**
 * Genera un numero aleatorio entre los parametros seleccionados
 * @param {number} [min] minimo del rango para generar el numero
 * @param {number} [max] maximo del rango para generar número
 * @returns {number}
 */
function generatenumber( min = 1, max = 100 ) {

	let value = Math.random() * ( max - min ) + min;
	value = Math.round( value );
	
	return value;
}

/**
 * Función que maneja la pulsación del boton
 */
function pressButton() {
	
	const numberSelected = generatenumber( 1, 10 );
	intentos += 1;

	if (numberSelected === winner) {

		console.log('felicidades, ganaste el juego en el intento %d', intentos);
		console.log({numberSelected, winner});

		process.exit( 0 ); // termina el programa

	} else {
		console.log('su número %d no ha sido el ganador, vuelve a intentar', numberSelected);
	
	}
}

function main() {
	console.log("Bienvenido a la Lotería: Pruebe suerte pulse el boton para generar un número y ganar el premio");
	const button = new Button({ pin: 2 });
	
	// inyecta al repl de jhonny-five mi instancia del boton
	if ( this.repl ) {
		board.repl.inject({button, board});
	}

	// events
	button.on("down", pressButton );
}

// setup
const winner = generatenumber( 1, 10 );
let intentos = 0;

// ejecutamos el programa
const board = new Board({repl: true});

// Event API 
board.on("ready", main );

// fail board
board.on('fail', function( event ) {
	console.log('%s envio un "fallo" mensaje: %s', event.class, event.message);
});
