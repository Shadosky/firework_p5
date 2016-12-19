var scl = 20;
var ground, stars, colorPalet;

var fireworks = [];

var gravity;

function setup() {
    createCanvas(1280, 480);

    gravity = createVector(0, .2);
    ground = new Ground();
    stars = new Stars(50);
    colorPalet = new ColorPalet();

}

function draw() {
    background(11, 25, 37);

    ground.show();
    stars.show();

    if (random(1) < .025)
        fireworks.push(new Firework());

    for (var i = 0; i < fireworks.length; i++) {
        fireworks[i].update();


        if (fireworks[i].dead) {
            fireworks.splice(i, 1);
        } else {
            fireworks[i].show();
        }
    }
}
