export const counter = {
    'y1': 100,
    'x1': 37,
    'y2': 100,
    'x2': 37,
    'game': null,
    'scoreOne': 0,
    'scoreTwo': 0,

    init(game) {
        this.game = game;
        this.x1 = this.game.canvas.width / 4;
        this.x2 = (this.game.canvas.width / 4) * 3;
    },
    update() {
        this.updateNumber();
        this.updateSpeed();

        this.game.c.save();
        this.render();
        this.game.c.restore();
    },
    updateNumber() {
        if (this.game.ball.x < this.game.playerTwo.x) {
            this.scoreOne += 1;
        }
        if (this.game.ball.x > this.game.playerOne.x) {
            this.scoreTwo += 1;
        }
    },
    updateSpeed() {

    },
    render() {
        this.game.c.font = "50px Arial";
        this.game.c.fillStyle = 'white';
        this.game.c.fillText(this.scoreTwo, this.x1, this.y1, 150);
        this.game.c.fillText(this.scoreOne, this.x2, this.y2, 150);
    }
}