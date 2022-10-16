/**
	operaciones binarias
**/
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}

//ejercicio

//ubicar el numero 32 en binario

let numero = dec2bin(32);
console.log(numero, "\n");

//correr 2 bits hacia la derecha

console.log(32>>2, "\n");

//obtener respuesta en un binario

let decimal = dec2bin(32>>2);
console.log(decimal);
/*
// and operator
console.table({
	valor_1: 5,
	binary_1: dec2bin(5),
	valor_2: 1,
	binary_2: dec2bin(1),
	resultado: 5 & 1
})

// or operator
console.table({
	valor_1: 5,
	binary_1: dec2bin(5),
	valor_2: 1,
	binary_2: dec2bin(1),
	resultado: 5 | 1
})

// xor operator
console.table({
	valor_1: 5,
	binary_1: dec2bin(5),
	valor_2: 1,
	binary_2: dec2bin(1),
	resultado: 5 ^ 1
})

// not operator
console.table({
	valor_1: 5,
	binary_1: dec2bin(5),
	resultado: ~5,
	//binary_resultado: bin2dec( dec2bin(~5) )
})

//operaciones de desplazamiento

//desplazar bits a la izquierda
console.table({
	valor_1: 5,
	binary_1: dec2bin(5),
	resultado: 5<<3,
	binary_resultado: dec2bin(5 << 3)
})

//desplazar bites a la derecha
console.table({
	valor_1: -5,
	binary_1: dec2bin(-5),
	resultado: -5>>1,
	binary_resultado: dec2bin(-5 >> 1)
})

// desplazamiento a la derecha con ceros
console.table({
	valor_1: 5,
	binary_1: dec2bin('5'),
	resultado: 5>>>0,
	binary_resultado: dec2bin(5 >>> 0)
})
*/
