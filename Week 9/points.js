var point = {
	x: 0
	y: 500
}

var col = {
	255
}


var x = random (0, 500)
var y = random (0, 500)


function setup() {
	createCanvas(windowWidth,windowHeight)
	background(0);
}


function draw() {
	point.x = random(0, width);
	point.y = random(0, height);
    stroke(255)
    fill(255)
	point(point.x, point.y, 100, 100);

}