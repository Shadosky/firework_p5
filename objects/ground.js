function Ground() {
    this.pos = createVector(0, height);
    this.sick = 10;

    this.show = function () {
        fill(22, 64, 12);
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
        rect(0, 0, width, -this.sick);
        pop();
    }
}