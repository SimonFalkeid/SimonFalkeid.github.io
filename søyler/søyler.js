//@ts-check

class Soyle {
    constructor(value, label = "", farge = "") {
        this.label = label;
        this.value = value;
        this.farge = farge;
    }
}

const data = [
    new Soyle(200, "ost", "red"),
    new Soyle(300, "egg", "green"),
    new Soyle(400)
]

function setup() {
    let divCanvas = document.getElementById("grafikk");
    let ctx = divCanvas.getContext("2d");

    tegnDiagram();

    function tegnDiagram() {
        ctx.beginPath();
        ctx.clearRect(0, 0, 500, 500);
        for (let i = 0; i < data.length; i++) {
            let soyle = data[i];
            ctx.fillStyle = soyle.farge || "blue";
            let x = i * 30;
            let h = soyle.value;
            let y = 500 - h;
            let w = 20;
            ctx.fillRect(x, y, w, soyle.value)
            ctx.fill();
        }
    }
}