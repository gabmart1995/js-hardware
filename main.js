/*const { Board, Led } = require('johnny-five');

let myBoard, myLed;

myBoard = new Board({port:"COM3"});*/

/*myBoard.on("ready", () => {
	console.log("conectado");
})

myBoard.on("error", (err) => {
	console.log(err);
})*/

var five = require("johnny-five");
var board = new five.Board({ port:"COM3" });
	
board.on("ready", function() {
  var led = new five.Led(13);
  led.blink(500);
});