const five = require('johnny-five')

function generatenumber( min = 1, max = 100 ) {
	let value = Math.random() * ( max - min ) + min;
	value = Math.round( value );
	return value;
}

/* funcion que captura el presionado del boton y genera otro numeros */
function pressButton() {
	const numberSelected = generatenumber( 1, 10 );
	intentos = intentos + 1;

	// documentacion
	// console.log( numberSelected );
	// console.log({ numberSelected, winner });
	
	if ( numberSelected == winner ) {
		console.log('felicidades, ganaste el juego en el intento ' + intentos);
		process.exit(0); // termina el programa

	} else {
		console.log('lo siento, vuelve a intentar');
	}
}

const winner = generatenumber( 1, 10 );
let intentos = 0;
console.log("Loteria: Pruebe suerte pulse el boton para generar un numero y genar el premio");

// ejecutamos el programa
const board = new five.Board({ port:"COM3", repl: true });

// Event API 
board.on("ready", function() {

	let button = new five.Button(2);

	// inyecta al repl de jhonny-five mi instancia del boton
	board.repl.inject({
    	button: button,
    	board: board
  	});

  	button.on("down", pressButton );

	 // "hold" the button is pressed for specified time.
	 //        defaults to 500ms (1/2 second)
	 //        set
	 /*button.on("hold", function() {
	    console.log("hold");
	 });*/

	 // "up" the button is released
	 /*button.on("up", function() {
	    console.log("up");
	 });*/
});

