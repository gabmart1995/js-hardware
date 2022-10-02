const SEGMENTS_LENGTH = 7;
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

/**
 * Lee el bit en la posicion especificada
 * @param {Buffer} buffer posicion del segmento
 * @param {number} position indice del segmento
 * @returns {number}
 */
 function bitRead( buffer, position ) {
    return Number.parseInt( String.fromCharCode( buffer[position] ) );
}

/**
 * Transforma la cadena de numeros binarios a string 
 * @param {number} position cadena de numeros
 * @returns {string}
 */
function transformToString( position ) {

    // transforma el numero a string usando base binaria
    let binaryString = position.toString( 2 ); 

    if ( binaryString.length < SEGMENTS_LENGTH ) {

        // calculamos el numeros de bit faltantes
        let bytesEmpty = ( SEGMENTS_LENGTH - binaryString.length );

        // agregamos los bit faltantes a la izquierda
        for ( 
            let position = 0; 
            position < bytesEmpty; 
            position++ 
        ) {
            binaryString = ( '0' + binaryString );
        }
    }

    return binaryString;
}

/**
 * Transforma el resultado a bytes
 * @param {string} position digito en cadena de texto
 * @returns {Buffer}
 */
function transformtoBuffer( position ) {
    
    // string a binario
    const buffer = Buffer.alloc( SEGMENTS_LENGTH, 0, 'binary');
        
    for ( let i = 0; i < position.length; i++ ) {
        buffer[i] = position.charCodeAt(i);
    }

    return buffer; 
}

// transformamos los bytes a string
const arrayBuffer = BINARY_SEGMENTS
    .map( transformToString )
    .map( transformtoBuffer );

// buffer binario
console.log( arrayBuffer );

// lectura de archivos binarios
arrayBuffer.forEach(( buffer ) => {

    for ( let i = ( buffer.length - 1 ); i >= 0; i-- ) {
        console.log( bitRead( buffer, i ) );
    }
});
