//@ts-check

class Medlem {
    sett1;
    sett2;
    sett3;
    constructor(s1, s2, s3) {
        this.sett1 = s1;
        this.sett2 = s2;
        this.sett3 = s3;
    }
}

function $(id) {
    return document.getElementById(id);
}

function setup() {
    let inpSett1 = $("sett1");
    let inpSett2 = $("sett2");
    let inpSett3 = $("sett3");
    let btnRegistrer = $("registrer");
    let divListe = $("liste");
    let btnVis = $("vis");

    btnRegistrer.addEventListener("click", registrer);
    btnVis.addEventListener("click", visListe);

    let treningsListe = [];

    function visListe() {
        visTrening(treningsListe, divListe);
    }

    function registrer() {
        let sett1 = inpSett1.value;
        let sett2 = inpSett2.value;
        let sett3 = inpSett3.value;

        let medlem = new Medlem(sett1, sett2, sett3);
        treningsListe.push(medlem);

        visTrening(treningsListe, divListe);
    }
}

function visTrening(arr, div) {
    let s = "<table>";
    for (let i = 0; i < arr.lenght; i += 1) {
        let m = arr[i];
        s += `<tr> <td>${m.sett1}</td> <td>${m.sett2}</td> <td>${m.sett3}</td> </tr><br>`
    }
    s + "</table>"
    div.innerHTML = s;
}