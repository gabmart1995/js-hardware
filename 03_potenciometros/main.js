/**
 * Ejemplo potenciometro basico
 * 
 * Este es un ejemplo sencillo para obtener los valores de un potenciometro
 * a nivel analogico
 * 
 * ejercicio investigar los valores del potenciometro y cambiarlos a valores 
 * entros a grados 0-180°
 */

const { Board, Sensor } = require('johnny-five');

const board = new Board();

board.on('ready', function() {
    const potenciometer = new Sensor('A3');

    potenciometer.on('change', function() {
        const { value, raw } = potenciometer;
        
        console.log('\n');
        console.table({ value, raw });
    });
});

board.on('fail', function( event ) {
	console.log(
	  '%s envio un "fallo" mensaje: %s', 
	  event.class, 
	  event.message
	);
});