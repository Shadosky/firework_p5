function Firework(x, y) {

    this.exploded = false;
    this.particles = [];
    this.dead = false;
    this.color = random(colorPalet.colors);
    this.fType = 0;
    this.lifespan = 150;
    this.explosionFactory = new ExplosionFactory(this.color);

    var seed = random(1);

    if(seed < .02) {
        this.fType = 1;
    } else if(seed < .04) {
        this.fType = 2;
    } else if(seed < .06) {
        this.fType = 3;
    }  else if(seed < .08) {
        this.fType = 4;
    }

    if (x && y)
        this.firework = new Particles(x, y, createVector(random(-8, 8), random(-8, -4)), this.color);
    else
        this.firework = new Particles(random(50, width - 50), height - ground.sick, createVector(0, random(-13, -7)), this.color);

    this.update = function () {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        } else {
            if (this.lifespan > 0) {
                for (var i = 0; i < this.particles.length; i++) {
                    if(!this.particles[i].pos) {
                        // this mean we have spawn a new firework
                        // cluster effect
                        this.particles[i].update();
                    } else {
                        this.particles[i].applyForce(gravity);
                        this.particles[i].update();
                        this.particles[i].decay();
                    }
                }
                this.lifespan--;
            } else {
                this.dead = true;
            }

        }
    }

    this.show = function () {
        if (!this.exploded)
            this.firework.show();
        else {
            for (var i = 0; i < this.particles.length; i++) {
                this.particles[i].show();
            }
        }
    }

    this.explode = function () {
        switch (this.fType) {
            case 0:
                // Normal
                this.particles = this.explosionFactory.basic(this.firework.pos.x, this.firework.pos.y);
                break;
            case 1:
                // Circle
                this.particles = this.explosionFactory.circle(this.firework.pos.x, this.firework.pos.y);
                break;
            case 2:
                // Hearth
                this.particles = this.explosionFactory.heart(this.firework.pos.x, this.firework.pos.y);
                break;
            case 3:
                // Batman
                this.particles = this.explosionFactory.batman(this.firework.pos.x, this.firework.pos.y);
                break;
            case 4:
                // Cluster
                this.particles = this.explosionFactory.cluster(this.firework.pos.x, this.firework.pos.y);
                break;
        }


    }
}