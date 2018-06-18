export const playerTwo = {
    'y': 400,
    'x': 150,
    'width': 20,
    'height': 100,
    'game': null,
    'maxWidth': 500,
    'ControlTopY': 50,
    'ControlTopX': 500,
    'ControlTopY2': 20,
    'ControlTopX2': 500,

    init(game) {
        this.game = game;
        // Écriture
        this.ControlTopY = this.game.canvas.height / 10;
        this.ControlTopX = this.game.canvas.width / 20;
        this.ControlTopY2 = this.game.canvas.height - this.game.canvas.height / 10;
        this.ControlTopX2 = this.game.canvas.width / 20;

        this.y = (this.game.canvas.height / 2) - (this.height / 2);

    },

    update() {
        // console.log(this.game.gameController.mouseY);
        this.updateDirection();
        this.updateSpeed();


        this.game.c.save();
        this.render();
        this.game.c.restore();
    },
    updateDirection() {
        if (this.game.gameController.activeKeys.includes('d') && this.y < this.game.canvas.height - this.height) {
            this.y = this.y + 10;
        }
        if (this.game.gameController.activeKeys.includes('e') && this.y > 0) {
            this.y = this.y - 10;
        }
    },
    updateSpeed() {

    },
    render() {
        this.game.c.fillStyle = 'white';
        this.game.c.fillRect(this.x, this.y, this.width, this.height);

        this.game.c.font = "40px Arial";
        this.game.c.fillText('\u2191 e', this.ControlTopX, this.ControlTopY, this.maxWidth);
        this.game.c.fillText('\u2193 d', this.ControlTopX2, this.ControlTopY2, this.maxWidth);
    }
}