//@ts-check

function setup() {
    let btnButton = document.getElementById("beregn")
    let inpA = document.getElementById("inpA")
    let inpB = document.getElementById("inpB")

    btnButton.addEventListener("click", beregn);

    function beregn(e) {
        var inpA = document.querySelector(`#inpA`).value;
        document.querySelector(`#beregn`).addEventListener(`click`,beregn);
    }
}

