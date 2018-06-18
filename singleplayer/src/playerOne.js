export const playerOne = {
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
        this.x = (this.game.canvas.width - this.x) - this.width;
        this.y = (this.game.canvas.height / 2) - (this.height / 2);

        this.y = (this.game.canvas.height / 2) - (this.height / 2);
        this.ControlTopY = this.game.canvas.height / 10;
        this.ControlTopX = this.game.canvas.width - this.game.canvas.width / 15;
        this.ControlTopY2 = this.game.canvas.height - this.game.canvas.height / 10;
        this.ControlTopX2 = this.game.canvas.width - this.game.canvas.width / 15;
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
        if (this.y < this.game.ball.y - (this.height / 2)) {
            this.y = this.y + 10;
        }
        if (this.y > this.game.ball.y) {
            this.y = this.y - 10;
        }

    },
    updateSpeed() {

    },
    render() {
        this.game.c.fillStyle = 'white';
        this.game.c.fillRect(this.x, this.y, this.width, this.height);
    }
}