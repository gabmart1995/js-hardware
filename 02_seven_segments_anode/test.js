const five = require('johnny-five');

/**
 * Lee los bits en la posicion especificada
 * @param {Buffer} buffer buffer que dibuja el numero seleccionado en el display
 * @param {number} posicion indice para seleccionar la posicion del bit
 * @returns {0|1}
 */
function leerBit( buffer, posicion ) {
  
    let resultado = String.fromCharCode( buffer[ posicion ]);
    resultado = Number.parseInt( resultado, 2 );

    return resultado; 
}

/**
 * transforma el numero a string
 * @param {number} numero numero que dibuja el segmento
 * @returns {string}
 */
function transformarNumeroString( numero ) {
    
    let numeroResultado = numero.toString( 2 ); // transforma a binary string
  
    if ( numeroResultado.length < SEGMENTS_LENGTH ) {
      
      const espaciosFaltantes = SEGMENTS_LENGTH - numeroResultado.length;
      // console.log({ numeroResultado,  indice, espaciosFaltantes });
  
      for ( let i = 0; i < espaciosFaltantes; i++ ) {
        numeroResultado = "0" + numeroResultado;
      }
    }
  
    return numeroResultado;
}

/**
 * transforma la cadena binaria en datos buffer
 * @param {string} cadenaBinaria cadena binaria en formato string
 * @returns {Buffer}
 */
function transformarStringBinario( cadenaBinaria ) {
  
    const buffer = Buffer.alloc( SEGMENTS_LENGTH, 00 );
  
    for ( let i = 0 ; i < buffer.length; i++ ) {
      buffer[i] = cadenaBinaria.charCodeAt( i );   
    }
  
    return buffer
}

/**
 * funcion que ilumina el segmento en el arduino
 * @param {Buffer} buffer buffer de datos
 */
function iluminarSegmento( buffer ) {
    
    for ( let i = 0; i < PORTS.length; i++ ) {
      let bit = leerBit( buffer, i );
      board.digitalWrite( PORTS[i], bit );
      
      console.log({ puerto: PORTS[i], bit, posicion });
    }
  
    // ejemplo de un numero "0"
    // board.digitalWrite( PORTS[0], 0 ); // a
    // board.digitalWrite( PORTS[1], 0 ); // b
    // board.digitalWrite( PORTS[2], 0 ); // c
    // board.digitalWrite( PORTS[3], 0 ); // d
    // board.digitalWrite( PORTS[4], 0 ); // e
    // board.digitalWrite( PORTS[5], 0 );  // f
    // board.digitalWrite( PORTS[6], 1 ); // g
    
    if ( posicion === 9 ) {
      posicion = 0; // reset position
      
    } else {
      posicion++;       
  
    }

    // nueva linea
    console.log('\n'); 
}

function main() {
  
  // abrimos los puertos en modo OUTPUT
  for ( let i = 0; i < PORTS.length; i++ ) {
    board.pinMode( PORTS[i], five.Pin.OUTPUT );
  }

  // inicializamos el timer
  timer = setInterval( function() {
    iluminarSegmento( BINARY_SEGMENTS[posicion] );
  }, 1000 );
}
  
const SEGMENTS_LENGTH = 7;

// se invierte el orden de los puertos sin afectar el indice
const PORTS = ([ 2, 3, 4, 5, 6, 7, 8 ]).reverse();  

let BINARY_SEGMENTS = [
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

BINARY_SEGMENTS = BINARY_SEGMENTS
    .map( transformarNumeroString )
    .map( transformarStringBinario );

// position of buffer array
let posicion = 0;

// timer reference
/** @type {NodeJS.Timer} */
let timer;

// API Johnny five
const board = new five.Board();

board.on('ready', main);
board.on('close', function() {

  // limpiamos el interval para cerrar el bucle 
  // cuando finalizamos el programa 
  // liberando recursos del dispositivo
  clearInterval( timer );
});