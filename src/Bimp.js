import P5Instance from './P5Instance';

const bimp = (isEnemy, width, height) => {
    const p = P5Instance.p5;
    const speed = 3;
    const knockback = 35;

    let x = 0;
    let y = 0;

    let xv = 0;
    let yv = 0;

    let w = width;
    let h = height;

    let lerpX = 0;
    let lerpY = 0;

    let xvDelta = 0;
    let yvDelta = 0;

    if (isEnemy) {
        x = p.random(-p.width / 2, p.width / 2);
        y = p.random(-p.height / 2, p.height / 2);
        lerpX = x;
        lerpY = y;
    }

    const controlAi = mainBimp => {
        let dir = -Math.atan2(lerpX - mainBimp.lerpX, lerpY - mainBimp.lerpY) - Math.PI / 2;
        p.strokeWeight(5);
        p.stroke(255, 0, 0);

        xvDelta += ((Math.cos(dir) * 3) - xvDelta) / 5;
        yvDelta += ((Math.sin(dir) * 3) - yvDelta) / 5;

        xv += xvDelta;
        yv += yvDelta;
    };

    const draw = mainBimp => {
        if (isEnemy) {
            p.fill(0, 0, 155);
        } else {
            p.fill(0);
        }

        p.noStroke();
        p.rect(lerpX - w / 2, lerpY - h / 2, w, h, 10, 10, 10, 10);

        if (!isEnemy) {
            if (p.keyIsDown(p.RIGHT_ARROW)) xv += speed; // right
            if (p.keyIsDown(p.LEFT_ARROW)) xv -= speed; // left
            if (p.keyIsDown(p.UP_ARROW)) yv -= speed; // up
            if (p.keyIsDown(p.DOWN_ARROW)) yv += speed; // down
        } else if (mainBimp) { //this is an enemy controlled by AI
            controlAi(mainBimp);
        }

        xv *= 0.9;
        yv *= 0.9;

        x += xv;
        y += yv;

        lerpX += (x - lerpX) / 5;
        lerpY += (y - lerpY) / 5;

        if (lerpX > (p.width / 2) - w / 2) xv = -knockback;
        if (lerpX < 0 - p.width / 2 + w / 2) xv = knockback;
        if (lerpY > p.height / 2 - h / 2) yv = -knockback;
        if (lerpY < 0 - p.height / 2 + h / 2) yv = knockback;
    };

    return {
        get x() { return x; },
        set x(value) { x = value; },

        get y() { return y; },
        set y(value) { y = value; },

        get xv() { return xv; },
        set xv(value) { xv = value; },

        get yv() { return yv; },
        set yv(value) { yv = value; },

        get lerpX() { return lerpX; },
        set lerpX(value) { lerpX = value; },

        get lerpY() { return lerpY; },
        set lerpY(value) { lerpY = value; },

        draw(mainBimp) {
            draw(mainBimp);
        }
    };
};

export const createBimp = (isEnemy = false, width = 50, height = 50) => bimp(isEnemy, width, height);