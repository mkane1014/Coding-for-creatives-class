Circle c;
ArrayList<Circle>cicles;



void setup() {
	size (640, 360);
	circles = new ArrayList<Circle>();

	

void draw() {
	background(0);
	Circle newC = newCircle(); 

	if (c != null) {
	circles.add(newC);
	}

	for (Circle c : circles) {
	if (c.growing){


	if(c.edges()) {
	c.growing = false;
	}
 boolean overlapping = false;
 for (Circle other : circles) {
 float d = dist(c.x,c.y, other.x, other.y);
 if (d < c.r + other .r) {
 c.growing = false;
 break;
 			}
 		}	
 	}
 }
	c.show();
	c.grow();
		}
	}
}	

void newCircle() {
	
	float x = random(width)
	float y = random(height)

	for (Circle c: circles){
	float d = (dist(x,y,c.x,c.y);
	if d < c.r) {
	valid = false;
	break;
	}
	}
	if (valid){
	return new Circle(x,y);}
	else{
	return null;
		}
	}



	circles.add(new Circle(x,y));
}
}