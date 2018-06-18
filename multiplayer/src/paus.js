export const paus = {
    'y1': 100,
    'x1': 37,
    'y2': 100,
    'x2': 37,
    'game': null,
    'scoreOne': 0,
    'scoreTwo': 0,
    'width': 300,
    'message': '',
    init(game) {
        this.game = game;
        this.x1 = this.game.canvas.width / 2 - this.width / 2;
    },
    update() {
        this.updateNumber();
        this.updateSpeed();

        this.game.c.save();
        this.render();
        this.game.c.restore();
    },
    updateNumber() {
        if (this.game.ball.hasStarted === true) {
            this.message = 'press Space to start';
            this.y1 = this.game.canvas.height / 2
        }
        if (this.game.ball.hasStarted === false) {
            this.message = 'press P for pause';
            this.y1 = this.y2;
        }
    },
    updateSpeed() {

    },
    render() {
        this.game.c.font = "40px Arial";
        this.game.c.fillStyle = 'white';
        this.game.c.fillText(this.message, this.x1, this.y1, this.width);
    }
}