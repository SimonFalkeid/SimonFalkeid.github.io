//@ts-check

function setup() {
    const btnJpg = document.getElementById("jpg");
    const btnPng = document.getElementById("png");
    const btnSvg = document.getElementById("svg");
    const pText1 = document.getElementById("text1");
    const pText2 = document.getElementById("text2");
    const pText3 = document.getElementById("text3");

    btnJpg.addEventListener("click", visInfo1);
    btnPng.addEventListener("click", visInfo2);
    btnSvg.addEventListener("click", visInfo3);

    function visInfo1() {
        pText1.style.opacity = 1;
    }

    function visInfo2() {
        pText2.style.opacity = 1;
    }

    function visInfo3() {
        pText3.style.opacity = 1;
    }
}