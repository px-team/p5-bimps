import P5 from 'p5';
import Bimp from './Bimp';

const sketch = p => {
    let canvas;

    let bimp;
    let enemyBimp1;
    let enemyBimp2;
    let enemyBimp3;
    let enemyBimp4;
    let enemyBimp5;
    let enemyBimp6;
    let enemyBimp7;
    let enemyBimp8;
    let enemyBimp9;
    let enemyBimp10;

    p.setup = () => {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight);

        bimp = new Bimp(p);
        enemyBimp1 = new Bimp(p, true, 20, 20);
        enemyBimp2 = new Bimp(p, true, 20, 20);
        enemyBimp3 = new Bimp(p, true, 20, 20);
        enemyBimp4 = new Bimp(p, true, 20, 20);
        enemyBimp5 = new Bimp(p, true, 20, 20);
        enemyBimp6 = new Bimp(p, true, 20, 20);
        enemyBimp7 = new Bimp(p, true, 20, 20);
        enemyBimp8 = new Bimp(p, true, 20, 20);
        enemyBimp9 = new Bimp(p, true, 20, 20);
        enemyBimp10 = new Bimp(p, true, 20, 20);
    };

    p.draw = () => {
        p.background(120);
        p.translate(p.width / 2, p.height / 2);
        bimp.draw();
        enemyBimp1.draw(bimp);
        enemyBimp2.draw(bimp);
        enemyBimp3.draw(bimp);
        enemyBimp4.draw(bimp);
        enemyBimp5.draw(bimp);
        enemyBimp6.draw(bimp);
        enemyBimp7.draw(bimp);
        enemyBimp8.draw(bimp);
        enemyBimp9.draw(bimp);
        enemyBimp10.draw(bimp);
    };


    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.keyPressed = () => {};
    p.mouseClicked = () => {};
};

new P5(sketch);