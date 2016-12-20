/**
 * Created by kevingiroux on 20/12/2016.
 */
function ExplosionFactory(color) {

    this.color = color;
    this.explosion = [];

    this.basic = function (startX, startY) {
        for (var i = 0; i < 75; i++) {
            this.explosion.push(
                new Particles(
                    startX,
                    startY,
                    p5.Vector.random2D().setMag(random(.1, 5)),
                    this.color
                )
            );
        }

        return this.explosion;
    }

    this.circle = function (startX, startY) {
        for (var i = 0; i < 50; i++) {
            var x = cos(i);
            var y = sin(i);

            var vector = createVector(x, y);
            this.explosion.push(
                new Particles(
                    startX,
                    startY,
                    vector.mult(3),
                    this.color
                )
            );
        }
        return this.explosion;
    }

    this.heart = function (startX, startY) {
        var mag = random(.2, .5);
        for (var i = -50; i < 50; i++) {

            var x = 16*pow(sin(i), 3);
            var y = 13*cos(i) - 5*cos(2*i) - 2*cos(3*i) - cos(4*i);

            var vector = createVector(-x, -y);
            this.explosion.push(
                new Particles(
                    startX,
                    startY,
                    vector.mult(mag),
                    this.color
                )
            );
        }
        return this.explosion;
    }

    this.batman = function (startX, startY) {
        var mag = 1;
        for (var i = -8; i < 8; i += .4) {
            // bot part of the curve
            var x = i;
            var y = 0;

            y = 2*sqrt((-abs(abs(x)-1))*abs(3-abs(x))/((abs(x)-1)*(3-abs(x))))*(1+abs(abs(x)-3)/(abs(x)-3))*sqrt(1-pow((x/7), 2))+(5+0.97*(abs(x-0.5)+abs(x+0.5))-3*(abs(x-0.75)+abs(x+0.75)))*(1+abs(1-abs(x))/(1-abs(x)));
            if(isNaN(y)) {
                y = (2.71052+1.5-0.5*abs(x)-1.35526*sqrt(4-pow((abs(x)-1),2)))*sqrt(abs(abs(x)-1)/(abs(x)-1))+0.9
            }
            if( !isNaN(y)) {
                var vector = createVector(-x, -y);
                this.explosion.push(
                    new Particles(
                        startX,
                        startY,
                        vector.mult(mag),
                        this.color
                    )
                );
            }
        }
        for (var i = -8; i < 8; i += .4) {
            // bot part of the curve
            var x = i;
            var y = 0;

            y = (-3)*sqrt(1-pow((x/7), 2))*sqrt(abs(abs(x)-4)/(abs(x)-4));
            if(isNaN(y)) {
                y = abs(x/2)-0.0913722*pow(x, 2)-3+sqrt(1-pow((abs(abs(x)-2)-1), 2));
            }
            if( !isNaN(y)) {
                var vector = createVector(-x, -y);
                this.explosion.push(
                    new Particles(
                        startX,
                        startY,
                        vector.mult(mag),
                        this.color
                    )
                );
            }
        }
        return this.explosion;
    }

    this.cluster = function (startX, startY) {
        for (var i = 0; i < 4; i++) {
            this.explosion.push(
                new Firework(startX, startY)
            );
        }

        return this.explosion;
    }
}