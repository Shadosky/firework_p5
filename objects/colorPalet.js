function ColorPalet() {
    this.colors = [];

    for (var i = 0; i < 100; i++) {
        this.colors.push(color(random(100, 255), random(100, 255), random(100, 255)));
    }
}