const five = require("johnny-five");
const board = new five.Board({ repl: true });

const SEGMENTS_LENGTH = 7;
const PORTS = [ 8, 7, 6, 5, 4, 3, 2 ];
const BINARY_SEGMENTS = [
    0b1000000, // 0
	  0b1111001, // 1
  	0b0100100, // 2
  	0b0110000, // 3
  	0b0011001, // 4
  	0b0010010, // 5
  	0b0000010, // 6
  	0b1111000, // 7
  	0b0000000, // 8
  	0b0011000, // 9
];


const result = BINARY_SEGMENTS
  .map( numberToString )
  .map( stringToBinary );

let position = 0;
let timer = null;

/**
 * Lee los bits en la posicion especificada
 * @param {Buffer} buffer buffer que dibuja el numero seleccionado en el display
 * @param {number} position indice para seleccionar la posicion del bit
 * @returns {0|1}
 */
function bitRead( buffer, position ) {

  let result = String.fromCharCode( buffer[ position ] );
  result = Number.parseInt( result, 2 );

  return result; 
}

/**
 * transforma el numero a string
 * @param {number} numero numero que dibuja el segmento
 * @returns {string}
 */
function numberToString( number ) {
  
  let numeroResultado = number.toString( 2 );
 
  if ( numeroResultado.length < SEGMENTS_LENGTH ) {

    const espaciosFaltantes = SEGMENTS_LENGTH - numeroResultado.length;
    // console.log({ numeroResultado, espaciosFaltantes });

    for ( let indice = 0; indice < espaciosFaltantes; indice++ ) {
      numeroResultado = "0" + numeroResultado;
    }
  }

  return numeroResultado;
}

/**
 * transforma la cadena binaria en datos buffer
 * @param {string} binaryString cadena binaria en formato string
 * @returns {Buffer}
 */
function stringToBinary( binaryString ) {

  const buffer = Buffer.alloc( SEGMENTS_LENGTH, 0 );

  for ( let i = 0 ; i < buffer.length ; i++ ) {
    buffer[i] = binaryString.charCodeAt( i );   
  }

  return buffer
}

/**
 * funcion que ilumina el segmento en el display
 * @param {Buffer} buffer buffer de datos
 */
function iluminateSegment( buffer ) {
  
  for ( let indice = 0 ; indice < PORTS.length; indice++ ) {
    
    let bit = bitRead( buffer, indice );
    board.digitalWrite( PORTS[indice], bit );
    
    console.log({ bit, indice, puerto: PORTS[indice], position });
  }
  
  console.log ("\n"); // new line

  // ejemplo de un numero "0"
  // board.digitalWrite( PORTS[0], 0 ); // a
  // board.digitalWrite( PORTS[1], 0 ); // b
  // board.digitalWrite( PORTS[2], 0 ); // c
  // board.digitalWrite( PORTS[3], 0 ); // d
  // board.digitalWrite( PORTS[4], 0 ); // e
  // board.digitalWrite( PORTS[5], 0 );  // f
  // board.digitalWrite( PORTS[6], 1 ); // g

  // se incrementa la posicion
  if ( position == 9 ) {
    position = 0;
  
  } else {
    position++;
  
  }
}

function main() {
  
  // init PORTS
  for ( let indice = 0 ; indice < PORTS.length;  indice++ ) {
    board.pinMode( PORTS[indice], five.Pin.OUTPUT );
  }

  timer = setInterval( function() {
    iluminateSegment( result[position] );
  }, 1000 );
}

// API Jhonny
board.on("ready", main );

// limpiar el buffer del timer
board.on("close", function() {
  clearInterval( timer );
});

// fail board
board.on('fail', function( event ) {
	console.log('%s envio un "fallo" mensaje: %s', event.class, event.message);
});

