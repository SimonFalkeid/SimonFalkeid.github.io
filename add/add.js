//@ts-check

function setup() {
    let inpTall1 = document.getElementById("tall1");
    let inpTall2 = document.getElementById("tall2");
    let btnAddisjon = document.getElementById("addisjon");
    let btnMultiplikasjon = document.getElementById("multiplikasjon");
    let lblResultat = document.getElementById("resultat");


    btnAddisjon.addEventListener("click", leggSammen);
    btnMultiplikasjon.addEventListener("click", multi);

    function leggSammen() {
        let tall1 = inpTall1.valueAsNumber;
        let tall2 = inpTall2.valueAsNumber;
        let sum = tall1 + tall2;
        lblResultat.innerHTML = sum;
    }

    function multi() {
        let tall1 = inpTall1.valueAsNumber;
        let tall2 = inpTall2.valueAsNumber;
        let sum = tall1 * tall2;
        lblResultat.innerHTML = sum;
    }
}