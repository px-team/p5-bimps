class Bimp{

    p = null;

    isEnemy = false;


    speed = 3;
    knockback = 35;

    x = 0;
    y = 0;

    xv = 0;
    yv = 0;

    w = 0;
    h = 0;

    lerpX = this.x;
    lerpY = this.y;

    xvDelta = 0;
    yvDelta = 0;

    constructor(p, isEnemy = false, width = 50, height = 50) {
        this.p = p;
        this.w = width;
        this.h = height;
        this.isEnemy = isEnemy;
        if(this.isEnemy) {
            this.x = this.p.random(-p.width / 2, p.width / 2);
            this.y = this.p.random(-p.height / 2, p.height / 2);
            this.lerpX = this.x;
            this.lerpY = this.y;
            console.log(`enemy x: ${this.x}; y: ${this.y}`);
        }
    }

    controlAi(mainBimp) {
        let dir = -Math.atan2(this.lerpX - mainBimp.lerpX, this.lerpY - mainBimp.lerpY) - Math.PI / 2;
        this.p.strokeWeight(5);
        this.p.stroke(255, 0, 0);

        this.xvDelta += ((Math.cos(dir) * 3) - this.xvDelta) / 5;
        this.yvDelta += ((Math.sin(dir) * 3) - this.yvDelta) / 5;

        this.xv += this.xvDelta;
        this.yv += this.yvDelta;
    };

    draw(mainBimp = null) {
        if(this.isEnemy) {
            this.p.fill(0, 0, 155);
        } else {
            this.p.fill(0);
        }

        this.p.noStroke();
        this.p.rect(this.lerpX - this.w / 2, this.lerpY - this.h / 2, this.w, this.h, 10, 10, 10, 10);

        if(!this.isEnemy) {
            if (this.p.keyIsDown(this.p.RIGHT_ARROW)) this.xv += this.speed; // right
            if (this.p.keyIsDown(this.p.LEFT_ARROW)) this.xv -= this.speed; // left
            if (this.p.keyIsDown(this.p.UP_ARROW)) this.yv -= this.speed; // up
            if (this.p.keyIsDown(this.p.DOWN_ARROW)) this.yv += this.speed; // down
        } else if(mainBimp) { //this is an enemy controlled by AI
            this.controlAi(mainBimp);
        }


        this.xv *= 0.9;
        this.yv *= 0.9;

        this.x += this.xv;
        this.y += this.yv;

        this.lerpX += (this.x - this.lerpX) / 5;
        this.lerpY += (this.y - this.lerpY) / 5;

        if(this.lerpX > (this.p.width / 2) - this.w / 2) {
            this.xv = -this.knockback;
        }
        if(this.lerpX < 0 - this.p.width / 2 + this.w / 2) {
            this.xv = this.knockback;
        }
        if(this.lerpY > this.p.height / 2 - this.h / 2) {
            this.yv = -this.knockback;
        }
        if(this.lerpY < 0 - this.p.height / 2 + this.h / 2) {
            this.yv = this.knockback;
        }
    }
}



export default Bimp;
