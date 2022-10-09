function bitRead( buffer, posicion ) {
  
    let result = String.fromCharCode( buffer[ posicion ]);
    result = Number.parseInt( result, 2 );

    return result; 
}
  
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
  
function transformarStringBinario( cadenaBinaria ) {
  
    const buffer = Buffer.alloc( SEGMENTS_LENGTH, 00 );
  
    for ( let i = 0 ; i < buffer.length; i++ ) {
      buffer[i] = cadenaBinaria.charCodeAt( i );   
    }
  
    return buffer
}
  
function iluminarSegmento( buffer ) {
    
    for ( const index in PORTS ) {
  
      let bit = bitRead( buffer, index );
      console.log({ puerto: PORTS[index], bit, position });
    }
  
    // a
    // board.digitalWrite( PORTS[0], 0 );
  
    // b
    // board.digitalWrite( PORTS[1], 0 );
  
    // c
    // board.digitalWrite( PORTS[2], 0 );
  
    // d
    // board.digitalWrite( PORTS[3], 0 );
  
    // e
    // board.digitalWrite( PORTS[4], 0 );
  
    // f
    // board.digitalWrite( PORTS[5], 0 );
  
    // g
    // board.digitalWrite( PORTS[6], 1 );
  
    if ( position >= 9 ) {
      position = 0; // reset position
      
    } else {
      position++;       
  
    }
    
    console.log('\n');
}

function main() {
    iluminarSegmento( BINARY_SEGMENTS[position] );
}
  
const SEGMENTS_LENGTH = 7;
const PORTS = [ 2, 3, 4, 5, 6, 7, 8 ].reverse();  // se invierte el orden de los puertos sin afectar el indice

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
let position = 0;

// infinite timer
setInterval( main, 1000 );
