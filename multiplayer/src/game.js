import {playerOne} from './playerOne';
import {playerTwo} from './playerTwo';
import {ball} from './ball';
import {counter} from './counter';
import {midline} from './midline';
import {paus} from './paus';

import {gameController} from './gameController';

const game = {
    // Canvas im dom gesucht
    "canvas": document.querySelector('canvas'),
    "c": null,
    "playerOne": playerOne,
    "playerTwo": playerTwo,
    "counter": counter,
    "ball": ball,
    "midline": midline,
    "paus": paus,
    "gameController": gameController,
    "gravity": 0.9,
    'hasStarted': false,

    init() {
        this.c = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.midline.init(this);
        this.playerOne.init(this);
        this.playerTwo.init(this);
        this.ball.init(this);
        this.paus.init(this);
        this.counter.init(this);
        this.gameController.init(this);
        this.animate();
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.playerOne.update();
        this.playerTwo.update();
        this.ball.update();
        this.midline.update();
        this.counter.update();
        this.paus.update();
        window.requestAnimationFrame(() => {
            this.animate();
        });
    }
};
game.init();