const five = require("johnny-five");
const board = new five.Board({ repl: true });

const SEGMENTS_LENGTH = 7;
const puertos = [8, 7, 6, 5, 4, 3, 2];
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

function bitRead (buffer, posicion) {

  // binario y lo transformaos a numero
  let result = String.fromCharCode(buffer[ posicion ]);
  result = Number.parseInt(result, 2);

  return result; 
}


function transformarNumeroString( numero ){
  //console.log(numero.toString(2));
  let numeroResultado = numero.toString(2);

  if(numeroResultado.length < SEGMENTS_LENGTH){

    const espaciosFaltantes = SEGMENTS_LENGTH - numeroResultado.length;
    // console.log({ numeroResultado,  indice, espaciosFaltantes });

    for(let i=0; i<espaciosFaltantes; i++){
      numeroResultado = "0" + numeroResultado;
    }

  }
  return numeroResultado;
}


function transformarStringBinario( cadenaBinaria ){

  const buffer = Buffer.alloc( SEGMENTS_LENGTH, 0);

  for(let i=0 ; i<buffer.length ; i++){
    buffer[i] = cadenaBinaria.charCodeAt(i);   
  }
  return buffer
}

function iluminarSegmento(buffer){
  for(let indice=0 ; indice < puertos.length ; indice++){
    let bit = bitRead(buffer, indice);
    console.log({bit, indice, puerto: puertos[indice], posicion});
    board.digitalWrite( puertos[indice], bit );
  }
  
  console.log ("\n");

  if(posicion == 9){
    posicion = 0;
  }else{
    posicion++;
  }

}

function main(){
  
  for(let indice = 0 ; indice < puertos.length ;  indice++){
    board.pinMode(puertos[indice], five.Pin.OUTPUT);
  }

  timer = setInterval(function(){
    iluminarSegmento(result[posicion]);
  }, 1000);

}

let result = BINARY_SEGMENTS.map(transformarNumeroString);
result = result.map(transformarStringBinario);
let posicion = 0;
let timer = null;

// API Jhonny
board.on("ready", main);

// limpiar el buffer del timer
board.on("close", function(){
  clearInterval(timer);
});

