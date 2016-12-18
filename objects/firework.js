function Firework()
{
	
	this.exploded = false;
	this.particles = [];
	this.dead = false;
	this.color = random(colorPalet.colors);
	this.lifespan = 50;

	this.firework = new Particles(random(50, width-50), height - ground.sick, createVector(0, random(-13, -7)), this.color);


	this.update = function()
    {
    	if(!this.exploded) {		
    		this.firework.applyForce(gravity);
    		this.firework.update();
    		if (this.firework.vel.y >= 0) {
    			this.exploded = true;
    			this.explode();
    		}
    	} else {
    		if(this.lifespan > -100) {
    			for (var i = 0; i < this.particles.length; i++) {
								
					this.particles[i].applyForce(gravity);
					this.particles[i].update();
					this.particles[i].decay();	
				}
				this.lifespan --;
    		} else {
    			this.dead = true;
    		}
    		
    	}
    }

	this.show = function() 
	{	
		if(!this.exploded)
			this.firework.show();
		else {
			for (var i = 0; i < this.particles.length; i++) {
				this.particles[i].show();
			}
		}
	}

	this.explode = function() {
		for (var i = 0; i < 75; i++) {
			this.particles.push(
				new Particles(
					this.firework.pos.x, 
					this.firework.pos.y, 
					p5.Vector.random2D().setMag(random(.1, 5)),
					this.color
				)
			);
		}
	}
}