import P5 from 'p5';
import P5Instance from './P5Instance';
import { createBimp } from './Bimp';

const sketch = p => {
    let canvas;

    let bimp;
    let enemyBimp1;

    p.preload = () => {
        P5Instance.registerP5(p);
    };

    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);

        bimp = createBimp();
        enemyBimp1 = createBimp(true, 20, 20);
    };

    p.draw = () => {
        p.background(120);
        p.translate(p.width / 2, p.height / 2);
        bimp.draw();
        enemyBimp1.draw(bimp);
    };


    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.keyPressed = () => {};
    p.mouseClicked = () => {};
};

new P5(sketch);