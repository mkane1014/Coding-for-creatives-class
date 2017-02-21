var angle = 0;

var slider;


function setup(){
	createCanvas(600, 600);
	slider = createSlider(0, Two_PI, PI/4, 0.01);
}

function draw() {
	background(0);
	angle = slider.value();
	stroke(255);
	translate(200, height);
	branch(100);

}

function branch(length) {
	line(0, 0, 0, - length);
	translate(0, -length);
	if (length > 4) {
	push();
	rotate(angle);
	branch(length * 0.67);
    pop();
	push();
	rotate(-angle);
	branch(len* 0.67);
	pop();

	
}
	}