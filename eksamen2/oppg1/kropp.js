//@ts-check

function setup() {
    let divRygg = document.getElementById("rygg");
    let divArm = document.getElementById("arm");
    let audioLyd1 = document.getElementById("lyd1");

    divRygg.addEventListener("click", playRygg);
    divArm.addEventListener("click", playArm);

    function playRygg() {
        divRygg.style.top = 0;
        divRygg.style.left = 0;
        let posx = 0;
        let posy = 0;
        let id = setInterval(frame, 10);
        divRygg.style.opacity = 1;
        audioLyd1.play();

        function frame() {
            if (posx == 280) {
                clearInterval(id);
            } else {
                posx++;
                divRygg.style.left = posx + 'px';
            }
            if (posy == 240) {
                clearInterval(id);
            } else {
                posy++;
                divRygg.style.top = posy + 'px';
            }
        }
    }

    function playArm() {
        divArm.style.top = 0;
        divArm.style.left = 0;
        let posx = 0;
        let posy = 0;
        let id1 = setInterval(lame, 10);
        let id2 = setInterval(lame, 10);
        divArm.style.opacity = 1;
        audioLyd1.play();

        function lame() {
            if (posx == 400) {
                clearInterval(id1);
            } else {
                posx++;
                divArm.style.left = posx + 'px';
            }
            if (posy == 120) {
                clearInterval(id2);
            } else {
                posy++;
                divArm.style.top = posy + 'px';
            }
        }
    }
}