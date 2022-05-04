// Gutiérrez Hardt Gestaltung
//
// Spin 01 (as seen on https://teia.art/objkt/237113)
//
// Interactive moiré animation. 
// Press mouse to randomly change the rotation/speed.
// Press 'ctrl' to save png.
// 
// For more stuff check out: https://pacohardt.myportfolio.com/work
// Insta: @paco.hardt
//
// Have fun!


var v = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noFill();
}

function draw() {

	let shiftX = map(sin(radians(frameCount)), -1, 1, 125, width - 200);
	let shiftY = map(cos(radians(frameCount)), -1, 1, 50, height - 200);
	let sW = map(cos(radians(frameCount)), -1, 1, 5, 20);
	let t = map(cos(radians(frameCount * 2)), -1, 1, 0, 75);
	let r = map(cos(radians(frameCount * 1.23)), -1, 1, 1, 2);


	translate(width / 2, height / 2);
	stroke(255, t);
	rotate(r * v)
	ellipse(0, 0, shiftX, shiftY);

}

function mousePressed(){
 if(v === 0){
    v = random(-10, 10);
    } else {
      v = 0;
    }
}

function touchStarted(){
 if(v === 0){
    v = random(-10, 10);
    } else {
      v = 0;
    }
}