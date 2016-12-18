function Stars(nbStars) {
	this.nbStars = nbStars;

	this.stars = [];

	for (var i = 0; i < this.nbStars; i++) {

		this.stars[i] = createVector(random(width), random(height - ground.sick));
	}

	this.show = function() 
	{
		for (var i = 0; i < this.stars.length; i++) {
			stroke(255);
			strokeWeight(2);
			point(this.stars[i].x, this.stars[i].y);
		}
	}
}