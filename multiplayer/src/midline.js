export const midline = {
    'y': 500,
    'x': 37,
    'width': 5,
    'height': 10,
    'game': null,

    init(game) {
        this.game = game;
        this.height = this.game.canvas.height;
        this.x = (this.game.canvas.width / 2) - (this.width / 2);
        this.y = (this.game.canvas.height / 2) - (this.height / 2);
    },
    update() {
        this.updateDirection();
        this.updateSpeed();

        this.game.c.save();
        this.render();
        this.game.c.restore();
    },
    updateDirection() {

    },
    updateSpeed() {

    },
    render() {
        this.game.c.fillStyle = 'white';
        this.game.c.fillRect(this.x, this.y, this.width, this.height);
    }
}