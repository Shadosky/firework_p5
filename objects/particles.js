function Particles(x, y, force, color) {

    this.pos = createVector(x, y);
    this.vel = force;
    this.acc = createVector(0, 0);
    this.life = 255;

    this.color = color;


    this.show = function () {
        stroke(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.life);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
    }

    this.update = function () {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.applyForce = function (force) {
        this.acc.add(force);
    }

    this.decay = function () {
        this.life = this.life - 5;

        if (this.life < 200) {
            this.vel.mult(.8);
        }

    }
}