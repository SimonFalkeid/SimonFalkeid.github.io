// @ts-check

const PORT = 3004;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const kunder = [
    { navn: "liv", konto: "12344", beholdning: 4000 },
    { navn: "ole", konto: "12345", beholdning: 14000 },
    { navn: "ada", konto: "12346", beholdning: 24000 },
    { navn: "per", konto: "12347", beholdning: 34000 },
    { navn: "siv", konto: "12348", beholdning: 44000 },
    { navn: "jan", konto: "12349", beholdning: 54000 },
];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post(`/konto/:user`, function(req, res) {
    const { user } = req.params;
    res.send(kunder[user]);
});

app.post("/konto", function(req, res) {
    res.send({ kunder });
});

app.use(express.static("public"));

app.listen(PORT, function() {
    console.log(` Connect at http://localhost:${PORT}`);
});