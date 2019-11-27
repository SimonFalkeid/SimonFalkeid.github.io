//@ts-check

function setup() {
    let inpNavn = document.getElementById("navn");
    let inpAlder = document.getElementById("alder");
    let inpDager = document.getElementById("dager");
    let divName = document.getElementById("name");
    let divAge = document.getElementById("age");
    let divDays = document.getElementById("days");
    let divPris = document.getElementById("pris");

    let btnBeregn = document.getElementById("beregn");

    btnBeregn.addEventListener("click", lagKort);

    function lagKort() {
        // @ts-ignore
        let navn = inpNavn.value;
        // @ts-ignore
        let alder = inpAlder.value;
        // @ts-ignore
        let dager = inpDager.value;
        let pris = 0;
        if (alder > 12) {
            pris = 200 * dager;
            if (pris > 999) {
                pris = 1000;
            }
            divName.innerHTML = "Navn: " + `<span style="color:red;">${navn}</span>`;
            divAge.innerHTML = "Alder: " + `<span style="color:red;">${alder}</span>`;
            divDays.innerHTML = "Antall dager: " + `<span style="color:red;">${dager}</span>`;
            divPris.innerHTML = "Pris: " + `<span style="color:red;">${pris}</span>` + `<span style="color:red;">,-</span>`;
        } else {
            pris = 100 * dager;
            if (pris > 499) {
                pris = 500;
            }
            divName.innerHTML = "Navn: " + `<span style="color:red;">${navn}</span>`;
            divAge.innerHTML = "Alder: " + `<span style="color:red;">${alder}</span>`;
            divDays.innerHTML = "Antall dager: " + `<span style="color:red;">${dager}</span>`;
            divPris.innerHTML = "Pris: " + `<span style="color:red;">${pris}</span>` + `<span style="color:red;">,-</span>`;
        }
        
    }
}