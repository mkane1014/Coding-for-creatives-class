var particles =[];


function setup() {
	createCanvas(800,800)
	particle = new particle(300, 300);
}

function mousePressed() {
	particles.push(new Particle(mouseX, mouseY));
}




function draw() {
	background (150);
	for (var i = 0; i < particles.length; i++) {
	particle[i].update();
	particle[i].show();
	}
}