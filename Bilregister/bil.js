//@ts-check
/*
class Medlem {
    type;
    skilt;
    farge;
    modell;
    constructor(t, s, f, m) {
        this.type = t;
        this.skilt = s;
        this.farge = f;
        this.modell = m;
    }
}
*/
function $(id) {
    return document.getElementById(id);
}

function setup() {
    let inpType = $("type");
    let inpSkilt = $("skilt");
    let inpFarge = $("farge");
    let inpModell = $("modell");
    let btnRegistrer = $("registrer");
  /*  let divListe = $("liste");
    let btnVis = $("vis");
*/
    btnRegistrer.addEventListener("click", registrer);
   /*
    btnVis.addEventListener("click", visListe);

    let bilListe = [ ];

    function visListe() {
        visMedlemmer(bilListe, divListe);
    }
*/
    function registrer() {
        let type = inpType.value;
        let skilt = inpSkilt.value;
        let farge = inpFarge.value;
        let modell = inpModell.value;

        console.log(type, skilt,farge,modell);
        /*
        let bil = new Medlem(type,skilt,farge,modell);
        bilListe.push(bil);
        
        visMedlemmer(bilListe, divListe); */
    }
}
  /*
function visMedlemmer(arr, div) {
    let s = "<table>";
    for (let i=0; i< arr.lenght; i += 1) {
        let m = arr[i];
        s += `<tr> <td>${m.fornavn}</td> <td>${m.etternavn}</td> <td>${m.epost}</td> <td>${m.alder}</td> <td>${m.mobil}</td> </tr><br>`
    }
    s + "</table>"
    div.innerHTML = s;
}*/