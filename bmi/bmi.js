function setup() {
    let inpHoyde = document.getElementById("hoyde");
    let inpVekt = document.getElementById("vekt");
    let btnBeregn = document.getElementById("beregn");
    let lblBmi = document.getElementById("bmi");
    let imgChungus = document.getElementById("chungus");
    let imgTurtle = document.getElementById("turtle");
    let imgBunny = document.getElementById("bunny");
    let divNavn = document.getElementById("navneliste");

    btnBeregn.addEventListener("click", beregnBMI);

    let navneListe = [ ];

    function beregnBMI() {
        let navn = inpNavn.value;
        let hoyde = inpHoyde.valueAsNumber;
        let vekt = inpVekt.valueAsNumber;
        let bmi = vekt / (hoyde ** 2);
        lblBmi.innerHTML = bmi.toFixed(1);

        if (bmi > 25) {
            imgChungus.className = "vismeg";
        } else {
            imgChungus.className = "";
        }

        if (bmi <= 25 && bmi >= 18) {
            imgTurtle.className = "vismeg";
        } else {
            imgTurtle.className = "";
        }

        if (bmi < 18) {
            imgBunny.className = "vismeg";
        } else {
            imgBunny.className = "";
        }

        navneListe.push(navn);

        divNavn.innerHTML = navneListe.join(",");
    }
}