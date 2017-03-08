var particles =[];


function setup() {
	createCanvas(800,800)
	for (var i = 0; i < 200; i++) {
		particles[i] = new Particle(300, 300);
	}
	
}

function mousePressed() {
	particles.push(new Particle(mouseX, mouseY));
}




function draw() {
	background (0);
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
		particles[i].show();
	}
}