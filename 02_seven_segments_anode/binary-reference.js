/**
 * Operaciones binarias (Repaso)
 */

/**
 * Operacion AND (&)
 * retornara 1 en la posicion, si ambos bits son iguales a 1 
 * 00000000000000000000000000000101  (5)
 * 00000000000000000000000000000001 (1)
 * 00000000000000000000000000000001 ( 5 & 1 ) (1)
 */
console.table({ 
    value_one: 5,
    value_two: 1,
    result: 5 & 1,  // imprime 1
    binary: decimalToBinary( 5 & 1 ),
});  

/**
 * Operacion OR (|)
 * retornara 1 en la posicion, si uno de los bits de comparacion es igual a 1
 * 00000000000000000000000000000101  (5)
 * 00000000000000000000000000000001 (1)
 * 00000000000000000000000000000101 ( 5 | 1 ) (5)
 */
 console.table({ 
    value_one: 5,
    value_two: 1,
    result: 5 | 1,  // imprime 5
    binary: decimalToBinary( 5 | 1 ),
});

/**
 * Operacion XOR (^)
 * retornara 1 si los bits de comparacion son diferentes
 * 
 * 00000000000000000000000000000101  (5)
 * 00000000000000000000000000000001 (1)
 * 00000000000000000000000000000100 ( 5 ^ 1 ) (4)
 */
 console.table({ 
    value_one: 5,
    value_two: 1,
    result: 5 ^ 1,  // imprime 4
    binary: decimalToBinary( 5 ^ 1 ),
});

/**
 * Operacion NOT (~)
 * invierte todas las posiciones de los bits
 * 
 * 00000000000000000000000000000101  (5)
 * 11111111111111111111111111111010 (~5)
 */
 console.table({ 
    original: 5,
    result: ~5,  // imprime 6
    binary: decimalToBinary( ~5 ),
    decimal: binaryToDecimal( decimalToBinary( 5 ) )
});

/**
 * Operaciones de desplazamiento de bits
 */

/**
 * Operacion desplazamiento a la izquierda (<<)
 * genera el bit 0 y inserta en el lado derecho 
 * el valor que esta despues del operador indica los bits de desplazamiento
 * 
 * 00000000000000000000000000000101  (5)
 * 00000000000000000000000000001010 (5 << 1) (10)  una posicion
 */
 console.table({ 
    original: 5,
    binary_original: decimalToBinary( 5 ),
    result: 5 << 3,  // imprime 40
    result_binary: decimalToBinary( 5 << 3 ),
});

/**
 * Operacion desplazamiento a la derecha (>>)
 * se crea una copia del ultimo bit a la izquierda y se inserta en el lado izquierdo
 * los bytes del lado derecho se descartan
 * 
 * 11111111111111111111111111111011  (-5)
 * 11111111111111111111111111111101 (-5 >> 1) (-3)  una posicion
 */
 console.table({ 
    original: -5,
    binary_original: decimalToBinary( -5 ),
    result: -5 >> 1,  // imprime -3
    result_binary: decimalToBinary( -5 >> 1 ),
});

/**
 * Como convertir a decimal a binario
 * parseamos a entero base 2 y luego se transforma a string.
 * 
 * 
 * @param {string} binaryNumber numero base 2
 * @returns {string} numero base 10 en formato string
 */
function  binaryToDecimal( binaryNumber ) {
    return Number.parseInt( binaryNumber, 2 ).toString( 10 );
}

/**
 * Como convertir a binario a decimal
 * aplicamos un desplazamiento de bit 0 a la derecha.
 * se introducen desde la izquierda y los bits a la derecha 
 * se caen
 * 
 * @param {number} decimalNumber numero base 10
 * @returns {string} numero binario en base string
 */
 function  decimalToBinary( decimalNumber ) {
    return ( decimalNumber >>> 0 ).toString( 2 );
}

// ejercicio
// ubicar el numero 32 en binario
let number = decimalToBinary( 32 );
console.log( number, "\n" );

// correr 2 bits hacia la derecha
console.log( 32 >> 2, "\n");

// obtener respuesta en un binario
let decimal = decimalToBinary( 32 >> 2 );
console.log( decimal );