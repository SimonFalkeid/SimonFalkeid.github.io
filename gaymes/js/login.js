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