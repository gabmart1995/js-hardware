const five = require("johnny-five");
const board = new five.Board({ repl: true });

const SEGMENTS_LENGTH = 7;
const puertos = [2, 3, 4, 5, 6, 7, 8];
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

  const buffer = Buffer.alloc( SEGMENTS_LENGTH, 00);

  for(let i=0 ; i<buffer.length ; i++){
    buffer[i] = cadenaBinaria.charCodeAt(i);   
  }
  return buffer
}

let result = BINARY_SEGMENTS.map(transformarNumeroString);
result = result.map(transformarStringBinario);

//console.log(result);

// verificacion de posiciones binarias
/* result.forEach(buffer => {
  for ( let i=0 ; i<buffer.length ; i++ ) {
    console.log( String.fromCharCode(buffer[i]) );
  }
});*/

/*result.forEach( buffer => {
  for (let i = (buffer.length - 1); i >= 0 ; i--) {
    console.log( bitRead( buffer, i));  
  }
});*/


// API Jhonny
board.on("ready", function(){
  
  let numero = 0;
  const iluminarSegmento = function() {

    // recorrer los puertos
    //for ( let i = 0; i < puertos.length; i++ ) {
      
      // extrae el puerto y buffer
      //let puerto = puertos[i];
      //let buffer = result[i];

      //console.log({ i, puerto, buffer });

      // bit 0
      //let bit = bitRead( buffer, 6 );
      //board.digitalWrite( puerto, bit );
      // obtenemos bytes
      /*for (let j = (buffer.length - 1); j >= 0 ; j--) {
        let bit = bitRead( buffer, j );
        console.log({bit});
        board.digitalWrite( puerto, bit );  
      }
    }*/

    // a
      /*let bit = bitRead( result[0], 0);
      console.log( bit );*/



      /*for ( let i = 0; i < puertos.length; i++ ) {
        let puerto = puertos[i];
        let buffer = result[i];

        for (let j = 0; j < buffer.length ; j++ ) { 
          let bit = bitRead( buffer, j );
          console.log({ puerto: puertos[j], bit });
          //board.digitalWrite( puertos[j], bit === 1 ? 0 : 1 );
        }

        // let bit =  bitRead( result[i], i );

        // console.log({ puerto: puertos[j], bit });

        /*for (let j = (result[0].length - 1); j >= 0 ; j--) { 
          bit = bitRead( result[0], j );
          console.log({ puerto: puertos[j], bit });
          //board.digitalWrite( puertos[i], bit );
        }

        //console.log({ puerto, bit });

        //let bit = bitRead( result[0], i );
        //console.log({ puerto: puertos[], bit, i, totalPuertos: (puertos.length - 1) });

        for (let j = (result[0].length - 1); j >= 0 ; j--) { 
          let bit = bitRead(  result[0], j );
          console.log({ puerto, bit });
          // sboard.digitalWrite( puerto, bit );
        }
      }*/


      // a
      board.digitalWrite( puertos[0], 0 );

      // b
      board.digitalWrite( puertos[1], 0 );

      // c
      board.digitalWrite( puertos[2], 0 );

      // d
      board.digitalWrite( puertos[3], 0 );

      // e
      board.digitalWrite( puertos[4], 0 );

      // f
      board.digitalWrite( puertos[5], 0 );

      // g
      board.digitalWrite( puertos[6], 1 );

    /*if (numero >= 9 ) {
      numero = 0;
      return;
    }

    numero++;*/
  };

  // console.log( five.Pin.OUTPUT );

  // inicializamos los puertos
  puertos.forEach( puerto => {
    board.pinMode(puerto, five.Pin.OUTPUT);
  });

  iluminarSegmento();

  // ejecutar la funcion cada segundo
  // setInterval( iluminarSegmento, 1000 );
});
  

