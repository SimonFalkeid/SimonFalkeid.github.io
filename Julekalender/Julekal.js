function setup() {
    let divVis = document.getElementById("vis");
    let lukene = Array.from(document.querySelectorAll(".luke"));
    lukene.forEach( e => e.addEventListener("click", visLuke));

    function visLuke(e) {
      let t = e.target;
      let nr = Number(t.innerHTML);
      divVis.style.backgroundImage = `url("bilde${nr}.jpg")`;
      divVis.style.display = "block";
      setTimeout(() =>  divVis.style.display = "none", 3000);
    }
  }