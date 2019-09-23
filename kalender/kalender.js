//@ts-check

function setup() {
    let divYear = document.getElementById("year");
    let divPy = document.getElementById("py");
    let divNy = document.getElementById("ny");
    let divMonth = document.getElementById("month");
    let divPm = document.getElementById("pm");
    let divNm = document.getElementById("nm");
    let divDatoer = document.getElementById("datoer");

    for (let i = 1; i < 43; i++) {
        let div = document.createElement("div");
        div.className = "dato";
        div.innerHTML = String(i);
        divDatoer.appendChild(div);
        let datoer = [];
    }

    let now = new Date();
    let start = now.getDay() + 6;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let monthStart = new Date(`${month}.1.${year}`);
    let start = monthStart.getDay
    let mNavn = "Januar,Februar,Mars,April,Mai,Juni,Juli,August,September,Oktober,November,Desember".split(",");

    divNy.addEventListener("click", nextyear);
    divPy.addEventListener("click", prevyear);
    divNm.addEventListener("click", nextmonth);
    divPm.addEventListener("click", prevmonth);

    function prevyear() {
        year -= 1;
        visCalender();
    }

    function nextyear() {
        year += 1;
        visCalender();
    }

    function nextmonth() {
        month += 1;
        if (month > 12) {
            month = 1;
            nextyear();
        }
        visCalender();
    }

    function prevmonth() {
        month -= 1;
        if (month < 1) {
            month = 12;
            prevyear();
        }
        visCalender();
    }

    function visCalender() {
        divMonth.innerHTML = mNavn[month - 1];
        divYear.innerHTML = String(year);
        for (let i = 1; i < )
    }
    visCalender();
}