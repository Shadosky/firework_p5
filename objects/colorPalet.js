function ColorPalet() {
    this.colors = [];

    for (var i = 0; i < 100; i++) {
        this.colors.push(color(random(150, 255), random(150, 255), random(150, 255)));
    }
}