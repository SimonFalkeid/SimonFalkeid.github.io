//@ts-check

class Keys {
    static keys = new Set();
    static za = document.addEventListener("keydown", Keys.mark)
    static zb = document.addEventListener("keyup", Keys.unmark);
    static mark(e) { Keys.keys.add(e.key); }
    static unmark(e) { Keys.keys.delete(e.key); }
    static any() { return Keys.keys.size > 0; }
    static many() { return Keys.keys.size > 1; }
    static has(a) { return Keys.keys.has(a); }
}

class Ting {
    constructor(div, x, y) {
        this.div = div;
        this.x = x;
        this.y = y;
    }
    render() {
        this.div.style.transform = `translate(${this.x * 10}px, ${this.y * 10}px)`;
    }
}

const ruter = [];

const mat = [];

function setup() {
    let divBrett = document.getElementById("brett");
    for (let i = 0; i < 60; i++) {
        const indre = [];
        for (let j = 0; j < 60; j++) {
            indre.push(0);
        }
        ruter.push(indre);
    }

    function finnMat(x, y) {
        if (ruter[x][y] === 1) {
            for (let i = 0; i < 1; i++) {
                const lemon = mat[i];
                if (lemon.x === x && lemon.y === y) {
                    lemon.div.classList.add("hidden");
                }
            }
        }
    }

    function spisMat() {
        const x = snake.x;
        const y = snake.y;
        finnMat(x, y);
    }

    function plaserMat() {
        for (let i = 0; i < 5; i++) {
            const x = Math.trunc(Math.random() * 60);
            const y = Math.trunc(Math.random() * 60);
            ruter[x][y] = 1;
            const div = document.createElement("div");
            div.className = "gul ting";
            divBrett.append(div);
            const lemon = new Ting(div, x, y);
            lemon.render();
            mat.push(lemon);
        }

        for (let i = 0; i < 5; i++) {
            const x = Math.trunc(Math.random() * 60);
            const y = Math.trunc(Math.random() * 60);
            ruter[x][y] = 1;
            const div = document.createElement("div");
            div.className = "rod ting";
            divBrett.append(div);
            const eple = new Ting(div, x, y);
            eple.render();
            mat.push(eple);
        }
    }

    plaserMat();

    let div = document.getElementById("ball");
    let snake = new Ting(div, 30, 40);
    snake.render();

    function animate() {
        spisMat();
        if (Keys.has("ArrowRight")) {
            if (snake.x < 59) {
                snake.x += 1;
            }
        }
        if (Keys.has("ArrowLeft")) {
            if (snake.x > 0) {
                snake.x -= 1;
            }
        }
        if (Keys.has("ArrowUp")) {
            if (snake.y > 0) {
                snake.y -= 1;
            }
        }
        if (Keys.has("ArrowDown")) {
            if (snake.y < 59) {
                snake.y += 1;
            }
        }
        if (Keys.has) snake.render();
        requestAnimationFrame(animate);
    }
    animate();
}