function Firework() {

    this.exploded = false;
    this.particles = [];
    this.dead = false;
    this.color = random(colorPalet.colors);
    this.fType = 0;
    this.lifespan = 150;

    var seed = random(1);

    if(seed < .02) {
        this.fType = 1;
    } else if(seed < .04) {
        this.fType = 2;
    } else if(seed < .06) {
        this.fType = 3;
    }


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

                    this.particles[i].applyForce(gravity);
                    this.particles[i].update();
                    this.particles[i].decay();
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
                break;

            case 1:
                // Circle
                for (var i = 0; i < 50; i++) {
                    var x = cos(i);
                    var y = sin(i);

                    var vector = createVector(x, y);
                    this.particles.push(
                        new Particles(
                            this.firework.pos.x,
                            this.firework.pos.y,
                            vector.mult(3),
                            this.color
                        )
                    );
                }
                break;
            case 2:
                // Hearth
                var mag = random(.2, .5);
                for (var i = -50; i < 50; i++) {

                    var x = 16*pow(sin(i), 3);
                    var y = 13*cos(i) - 5*cos(2*i) - 2*cos(3*i) - cos(4*i);

                    var vector = createVector(-x, -y);
                    this.particles.push(
                        new Particles(
                            this.firework.pos.x,
                            this.firework.pos.y,
                            vector.mult(mag),
                            this.color
                        )
                    );
                }
                break;
            case 3:
                // Batman
                var mag = 1;
                for (var i = -8; i < 8; i += .2) {
                    // bot part of the curve
                    var x = i;
                    var y = 0;

                    y = 2*sqrt((-abs(abs(x)-1))*abs(3-abs(x))/((abs(x)-1)*(3-abs(x))))*(1+abs(abs(x)-3)/(abs(x)-3))*sqrt(1-pow((x/7), 2))+(5+0.97*(abs(x-0.5)+abs(x+0.5))-3*(abs(x-0.75)+abs(x+0.75)))*(1+abs(1-abs(x))/(1-abs(x)));
                    if(isNaN(y)) {
                        y = (2.71052+1.5-0.5*abs(x)-1.35526*sqrt(4-pow((abs(x)-1),2)))*sqrt(abs(abs(x)-1)/(abs(x)-1))+0.9
                    }
                    if( !isNaN(y)) {
                        var vector = createVector(-x, -y);
                        this.particles.push(
                            new Particles(
                                this.firework.pos.x,
                                this.firework.pos.y,
                                vector.mult(mag),
                                this.color
                            )
                        );
                    }

                }
                for (var i = -8; i < 8; i += .2) {
                    // bot part of the curve
                    var x = i;
                    var y = 0;

                    y = (-3)*sqrt(1-pow((x/7), 2))*sqrt(abs(abs(x)-4)/(abs(x)-4));
                    if(isNaN(y)) {
                        y = abs(x/2)-0.0913722*pow(x, 2)-3+sqrt(1-pow((abs(abs(x)-2)-1), 2));
                    }
                    if( !isNaN(y)) {
                        var vector = createVector(-x, -y);
                        this.particles.push(
                            new Particles(
                                this.firework.pos.x,
                                this.firework.pos.y,
                                vector.mult(mag),
                                this.color
                            )
                        );
                    }

                }
                break;
        }


    }
}