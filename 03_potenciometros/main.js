/**
 * Ejemplo potenciometro basico
 * 
 * Este es un ejemplo sencillo para obtener los valores de un potenciometro
 * a nivel analogico
 * 
 * ejercicio investigar los valores del potenciometro y cambiarlos a valores 
 * entros a grados 0-180°
 */

const { Board, Sensor, Led } = require('johnny-five');

const board = new Board();

board.on('ready', function() {
    const potenciometer = new Sensor('A0');
    const led = new Led( 6 );

    potenciometer.on('change', function() {
        const { value, raw } = potenciometer;
    
        console.log('\n');
        console.table({ value, raw });

        // le pasamos el 5v
        led.brightness( value / 4 );
    });

    
});

board.on('fail', function( event ) {
	console.log(
	  '%s envio un "fallo" mensaje: %s', 
	  event.class, 
	  event.message
	);
});