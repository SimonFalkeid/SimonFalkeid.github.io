// @ts-check

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpDager = document.getElementById("dager");
    let divName = document.getElementById("name");
    let divAge = document.getElementById("age");
    let divDays = document.getElementById("days");
    let divPris = document.getElementById("pris");
    let divAvslag = document.getElementById("avslag");
    let divMelding = document.getElementById("melding");
    let btnBeregn = document.getElementById("beregn");
    let divHytte = document.getElementById("hytte");
    let btnLeie = document.getElementById("leie");


    btnBeregn.addEventListener("click", lagKort);

    function lagKort() {
        // @ts-ignore
        let navn = inpNavn.value;
        // @ts-ignore
        let alder = inpAlder.value;
        // @ts-ignore
        let dager = inpDager.value;
        if (dager > 7) {
            alert("Du kan ha maks 7 dager på ett kort");
            dager = 7;
            // @ts-ignore
            inpDager.value = 7;
        }
        let pris = 0;
        if (alder > 12) {
            pris = 200 * dager;
            if (pris > 999) {
                pris = 1000;
                // @ts-ignore
                divAvslag.style.opacity = 0.9;
                divMelding.innerHTML = "DU FIKK " + (200 * dager - 1000) + ",- AVSLAG";
                divMelding.style.opacity = 1;
            }
            divName.innerHTML = "Navn: " + `<span style="color:red;">${navn}</span>`;
            divAge.innerHTML = "Alder: " + `<span style="color:red;">${alder}</span>`;
            divDays.innerHTML = "Antall dager: " + `<span style="color:red;">${dager}</span>`;
            divPris.innerHTML = "Pris: " + `<span style="color:red;">${pris}</span>` + `<span style="color:red;">,-</span>`;
        } else {
            pris = 100 * dager;
            if (pris > 499) {
                pris = 500;
                // @ts-ignore
                divAvslag.style.opacity = 0.9;
                divMelding.innerHTML = "DU FIKK " + (100 * dager - 500) + ",- AVSLAG";
                divMelding.style.opacity = 1;
            }
            divName.innerHTML = "Navn: " + `<span style="color:red;">${navn}</span>`;
            divAge.innerHTML = "Alder: " + `<span style="color:red;">${alder}</span>`;
            divDays.innerHTML = "Antall dager: " + `<span style="color:red;">${dager}</span>`;
            divPris.innerHTML = "Pris: " + `<span style="color:red;">${pris}</span>` + `<span style="color:red;">,-</span>`;
        }
        divHytte.style.opacity = 0.7;
        btnLeie.style.opacity = 1;
    }
}