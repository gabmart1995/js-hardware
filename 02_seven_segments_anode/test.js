const SEGMENTS_LENGTH = 7;
const binaryPositions = [
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

function main() {
    
    // transformamos los bytes a string
    let arrayBinaryString = binaryPositions.map( position => {

        let binaryString = position.toString( 2 ); // transforma el numero a string usando base binaria

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
    });

    console.log( arrayBinaryString );
}

main();