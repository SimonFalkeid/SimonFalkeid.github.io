//@ts-check

class Sprite {
    x; y; w; h; div;
    constructor(div, x, y, w, h) {
        this.div = div;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw() {
        this.div.style.top = this.y + "px";
        this.div.style.left = this.x + "px";
    }
    overlap(b) {
        let a = this;
        return a.x > b.x - a.w && 
               a.x < b.x + b.w &&
               a.y > b.y - a.h &&
               a.y < b.y + a.h;
    }
}

class Movable extends Sprite {
    vx; vy;
    constructor(div, x, y, w, h, vx, vy) {
        super(div, x, y, w, h)
        this.vx = vx;
        this.vy = vy;
    }
    move() {
        this.x += this.vx;
        this.y += this.vy;
    }
}

class Breakable extends Sprite {
    constructor(div,x,y,w,h) {
        super(div,x,y,w,h);
    }
    breakme() {
        this.dead = true;
    }
    overlap() {
        if (this.dead) return false;
        super.overlap(b);
    }
}

function $(element) {
    return document.getElementById(element);
}

function setup() {
    let divBrett = $("brett");
    let divInfo = $("info");
    let divScore = $("score");
    let ball, plate;

    let px = 100;

    const brikkeliste = [ ];

    const keys = new Set();

    addEventListener("keydown", lagrekey);
    addEventListener("keyup", slettkey);

    function lagrekey(e) {
        let k = e.key;
        console.log(k);
        keys.add(k);
    }

    function slettkey(e) {
        let k = e.key;
        keys.delete(k);
    }

    lagBrikker();
    lagPlate();
    lagBall();
    startSpill();

    function lagBrikker() {
        for (let j = 0; j < 12; j += 1) {
            for (let i = 0; i < 30; i += 1) {
                let div = document.createElement("div");
                div.className = "brikke";
                let x = i * 30;
                let y = j * 16;
                div.style.left = i * 30 + "px";
                div.style.top = j * 16 + "px";
                divBrett.appendChild(div);
                let brikke = new Breakable(div, x, y, 26, 12);
                brikke.draw();
                brikkeliste.push(brikke);
            }
        }
    }

    function lagPlate() {
        let div = document.createElement("div");
        div.className = "plate";
        divBrett.appendChild(div);
        plate = new Movable(div, 400, 450, 100, 10, 0, 0);
        plate.draw();
    }

    function lagBall() {
        let div = document.createElement("div");
        div.className = "ball";
        divBrett.appendChild(div);
        ball = new Movable(div, 440, 416, 20, 20, 5, -5);
        ball.draw();
    }

    function animate() {
        plate.vx *= 0.95;
        if (keys.has("a") || keys.has("Arrowleft")) {
            plate.vx -= 10;
        }
        if (keys.has("d") || keys.has("Arrowright")) {
            plate.vx += 10;
            
        }

        if(ball.y < -10) {
            ball.vy = Math.abs(ball.vy);
        }

        if(ball.x > 880) {
            ball.vx = -Math.abs(ball.vx);
        }

        if(ball.y > 416) {
            ball.vy = -Math.abs(ball.vy);
        }

        if(ball.x < 0) {
            ball.vx = Math.abs(ball.vx);
        }
        
        if (ball.overlap(plate)) {
            ball.vy = -Math.abs(ball.vy);
        }

        for (let brikke of brikkeliste) {
            if (brikke.overlap(ball)) {
                brikke.div.classList.add("hidden");
                ball.vy = -ball.vy;
                break;
            }
        }

        plate.move();
        plate.draw();

        ball.move();
        ball.draw();
    }

    function startSpill() {
        setInterval(animate, 50);
    }
}