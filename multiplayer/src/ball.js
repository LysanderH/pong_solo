export const ball = {
    'y': 200,
    'x': 37,
    'site': 20,
    'game': null,
    'speed': 2,
    'maxSpeed': 50,
    'dx': Math.random(),
    'dy': Math.random(),
    'hasStarted': false,

    init(game) {
        this.game = game;
        this.x = (this.game.canvas.width / 2) - (this.site / 2);
        this.y = (this.game.canvas.height / 2) - (this.site / 2);
        this.hasStarted = true;
    },
    update() {
        this.updateDirection();
        this.updateSpeed();

        this.game.c.save();
        this.render();
        this.game.c.restore();
    },
    updateDirection() {
        window.addEventListener('keydown', (a) => {
            if (a.keyCode === 32) {
                this.hasStarted = false;
            }
        });
        window.addEventListener('keydown', (a) => {
            if (a.keyCode === 80) {
                this.hasStarted = true;
            }
        });

        if (this.hasStarted === false) {
            // Wenn der Ball links oder Rechts aufprallt
            if (this.x + this.site >= this.game.canvas.width || this.x - this.site < 0) {
                this.dx = -this.dx;
            }
            // Wenn der Ball oben oder unten aufprallt
            if (this.y + this.site >= this.game.canvas.height || this.y - this.site < 0) {
                this.dy = -this.dy;
            }

            if (this.x <= this.game.playerTwo.x + this.game.playerTwo.width
                && this.y >= this.game.playerTwo.y - this.site
                && this.y <= this.game.playerTwo.y + this.game.playerTwo.height
            ) {
                this.dx = -this.dx;
            }
            if (this.x >= (this.game.playerOne.x - this.site)
                && this.y >= this.game.playerOne.y - this.site
                && this.y <= this.game.playerOne.y + this.game.playerOne.height
            ) {
                this.dx = -this.dx;
            }
            if (this.x < this.game.playerTwo.x || this.x > this.game.playerOne.x) {
                this.x = (this.game.canvas.width / 2) - (this.site / 2);
                this.y = (this.game.canvas.height / 2) - (this.site / 2);
                this.speed = 5;
                this.hasStarted = true;
                this.dx = Math.random();
                this.dy = Math.random();
            }
            this.speed += 0.01;
            this.x = this.x + this.dx * this.speed;
            this.y = this.y + this.dy * this.speed;
        }
    },
    updateSpeed() {

    },
    render() {
        this.game.c.fillStyle = 'white';
        this.game.c.fillRect(this.x, this.y, this.site, this.site);
    }
}