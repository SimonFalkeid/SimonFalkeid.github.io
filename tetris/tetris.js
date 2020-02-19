//@ts-check

class Brikke {
    constructor(klasse, x, y) {
        this.klasse = klasse;
        this.x = x;
        this.y = y;
        this.grid = [0, 1, 0, 1, 1, 1, 0, 0, 0];
    }

    render() {
        let idx = 0;
        for (let i = 0; i < 9; i++) {
            let v = this.grid[i];
            if (v !== 0) {
                const b = brikkene[idx];
                idx++;
                const dx = i % 3;
                const dy = Math.trunc(i / 3);
                const px = (this.x + dx) * 20;
                const py = (this.y + dy) * 20;
                b.style.transform = `translate(${px}px, ${py}px)`
                b.className = "brikke " + this.klasse;
            }
        }
    }
}

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

let brikkene;

const brett = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const $ = (id) => document.getElementById(id);

function setup() {
    const divBrett = $("brett");
    brikkene = document.querySelectorAll(".brikke");
    const klasser = "szoljti".split("");

    const index = Math.trunc(Math.random() * klasser.length);
    const klasse = klasser[index];
    const brikke = new Brikke(klasse, 0, 0);
    brikke.render();

    setInterval(falleNed, 200);
    setInterval(styrBrikke, 70);

    function sjekkLedig() {
        const y = brikke.y + 3;
        const x = brikke.x;
        const nesteRad = brett[y].slice(x, 3);
        renturn true;
    }

    function falleNed() {
        if (sjekkLedig()) {
            brikke.y++;
            brikke.render();
        } else {
            for (let i = 0; i < 4; i++) {
                const d = document.createElement("div");
                d.className = "brikke " + brikke.klasse;
                d.style.transform = brikkene[i].style.transform;
                divBrett.appendChild(d);
            }
            for (let i = 0; i < 9; i++) {
                if (brikke.grid[i] === 1) {
                    const dx = i % 3;
                    const dy = Math.trunc(i / 3);
                    brett[brikke.y + dy][brikke.x + dx] = 1;
                }
            }
            brikke.y = 0;
            brikke.x = 0;
            brikke.render();
        }
    }

    function styrBrikke() {
        if (Keys.has("d") && brikke.x < 9) {
            brikke.x++;
            brikke.render();
        }

        if (Keys.has("a") && brikke.x > 0) {
            brikke.x--;
            brikke.render();
        }

        if (Keys.has(" ")) {
            brikke.y = 18;
            brikke.render();
        }
    }
}