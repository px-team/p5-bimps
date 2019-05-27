
let p5 = null;

export default class P5Instance {

    static registerP5(p) {
        p5 = p;
    }

    static get p5() {return p5;}
}