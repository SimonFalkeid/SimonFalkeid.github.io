// @ts-check

function setup() {
    let inpBrukeravn = document.getElementById("brukernavn");
    let inpPassord = document.getElementById("passord");
    let btnRegistrer = document.getElementById("registrer");

    btnRegistrer.addEventListener("click", lagreData);

    function lagreData() {
        let brukernavn = inpBrukeravn.value;
        let passord = inpPassord.value;
        let info = { brukernavn, passord };
        localStorage.setItem(brukernavn, JSON.stringify(info));
    }

}
/*
la brukernavn være verdien til brukernavn inputen
la passord være verdien til passord inputen
la info være brukernavn og passord
Plaser i localStorage, ved brukernavn og info
*/