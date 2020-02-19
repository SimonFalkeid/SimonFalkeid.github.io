// @ts-check

function setup() {
    let btnBilder1 = document.getElementById("bilder1");
    let btnBilder2 = document.getElementById("bilder2");
    let btnBilder3 = document.getElementById("bilder3");
    let imgPic11 = document.getElementById("pic11");
    let imgPic12 = document.getElementById("pic12");
    let imgPic13 = document.getElementById("pic13");
    let imgPic21 = document.getElementById("pic21");
    let imgPic22 = document.getElementById("pic22");
    let imgPic23 = document.getElementById("pic23");
    let imgPic31 = document.getElementById("pic31");
    let imgPic32 = document.getElementById("pic32");
    let imgPic33 = document.getElementById("pic33");

    btnBilder1.addEventListener("click", visBidler1);
    btnBilder2.addEventListener("click", visBidler2);
    btnBilder3.addEventListener("click", visBidler3);

    function visBidler1() {
        // @ts-ignore
        imgPic11.style.opacity = 1;
        // @ts-ignore
        imgPic12.style.opacity = 1;
        // @ts-ignore
        imgPic13.style.opacity = 1;
    }

    function visBidler2() {
        // @ts-ignore
        imgPic21.style.opacity = 1;
        // @ts-ignore
        imgPic22.style.opacity = 1;
        // @ts-ignore
        imgPic23.style.opacity = 1;
    }

    function visBidler3() {
        // @ts-ignore
        imgPic31.style.opacity = 1;
        // @ts-ignore
        imgPic32.style.opacity = 1;
        // @ts-ignore
        imgPic33.style.opacity = 1;
    }
}