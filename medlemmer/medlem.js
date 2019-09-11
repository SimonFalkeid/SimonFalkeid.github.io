//@ts-check

class Medlem {
    fornavn;
    etternavn;
    epost;
    alder;
    mobil;
    constructor(fn, en, epost, alder, mobil) {
        this.fornavn = fn;
        this.etternavn = en;
        this.epost = epost;
        this.alder = alder;
        this.mobil = mobil;
    }
}

function $(id) {
    return document.getElementById(id);
}

function setup() {
    let inpFornavn = $("fornavn");
    let inpEtternavn = $("etternavn");
    let inpEpost = $("epost");
    let inpAlder = $("alder");
    let inpMobil = $("mobil");
    let btnRegistrer = $("registrer");
    let divListe = $("liste");
    let btnVis = $("vis");

    btnRegistrer.addEventListener("click", registrer);
    btnVis.addEventListener("click", visListe);

    let medlemListe = [ ];

    function visListe() {
        visMedlemmer(medlemListe, divListe);
    }

    function registrer() {
        let fornavn = inpFornavn.value;
        let etternavn = inpEtternavn.value;
        let epost = inpEpost.value;
        let alder = inpAlder.valueAsNumber;
        let mobil = inpMobil.value;

        let medlem = new Medlem(fornavn,etternavn,epost,alder,mobil);
        medlemListe.push(medlem);

        visMedlemmer(medlemListe, divListe);
    }
}

function visMedlemmer(arr, div) {
    let s = "<table>";
    for (let i=0; i< arr.lenght; i += 1) {
        let m = arr[i];
        s += `<tr> <td>${m.fornavn}</td> <td>${m.etternavn}</td> <td>${m.epost}</td> <td>${m.alder}</td> <td>${m.mobil}</td> </tr><br>`
    }
    s + "</table>"
    div.innerHTML = s;
}