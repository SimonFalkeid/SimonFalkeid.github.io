//@ts-check

function setup() {
    let land = "Norway";
    let year = "2010"
    let url = `http://api.population.io/1.0/population/${year}/${land}/?format=json`;
        fetch(url).then(r => r.json())
        .then(data => behandle(data))
        .catch(e => console.log("Dette virka ikke."))
}