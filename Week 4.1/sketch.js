function setup() {
	createCanvas(640, 360)
}

function draw() {
	background(50, 50, 50);
	ellipseMode(Center);
	rectMode(Center);
	// Body
	fill(0 , 0, 255)
	rect(240,115,60,60); 

	// Head
	ellipse(240,115,60,60);

	// Eyes
	fill(0, 255, 0)
	ellipse(221,115,16, 32);
    ellipse(259, 115, 16, 32);

    // Legs
    line(230, 195, 220, 205);
    line (250, 195, 260, 205);
}