class Ting {

    constructor(navn, masse, volum) {
        this.navn = navn;
        this.masse = masse;
        this.volum = volum;
    }
    tettehet() {
        return this.masse / this.volum;
    }
}

class SalgbarTing extends Ting {

    constructor(navn, masse, volum, kilopris) {
        super(navn, masse, volum);
        this.kilopris = kilopris;
        this.solgt = false;
    }


    pris() {
        return this.masse * this.kilopris;
    }


    selg() {
        this.solgt = true;
    }
}

let a = new Ting("Gråstein", 2.3, 0.9);
let b = new SalgbarTing("Sølvklump", 7, 1.1, 1450)

a.tetthet()
a.pris()
b.tetthet()
b.pris()

a.contructor.name === "Ting"
b.contructor.name === "SalgbarTing"
var tingeneMine = [];
tingeneMine.push(a);
tingeneMine.push(b);