const frutas = [
    "Banana",
    "Maça",
    "Uva",
    "Laranja",
    "Abacaxi",
    "Pêssego",
    "Morango",
    "Goiaba",
    "Manga",
    "Kiwi",
];

function exibirFrutasWhile() {

    let i = 0;
    let text = "";
    while (frutas[i]) {
        text += frutas[i] + "<br>";
        i++;
    }

    document.getElementById("exibirFrutasWhile").innerHTML = text;

}

function exibirFrutasDoWhile() {

    let text = "";
    let i = 0;
    do {
        text += frutas[i] + "<br>";
        i++;
    }
    while (i < 10);
    document.getElementById("exibirFrutasDoWhile").innerHTML = text;
}

function exibirFrutasFor() {

    let i = 0;
    let text = "";
    for (; frutas[i];) {
        text += frutas[i] + "<br>";
        i++;
    }

    document.getElementById("exibirFrutasFor").innerHTML = text;
}

function exibirFrutasForEach() {

    let text = "";
    frutas.forEach(myFunction);

    document.getElementById("exibirFrutasForEach").innerHTML = text;

    function myFunction(item) {
        text += item + "<br>";
    }

}

function tabuada() {
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    for (var count = 1; count <= 10; count++)
        tabuada += num + " x " + count + " = " +
            num * count + "<br />";

    resposta.innerHTML = tabuada;
}

const numeroReal = [2, 4, 5, 7, 9];

function quadrado () {
    document.getElementById("exibirQuadrado").innerHTML = Math.pow(numeroReal[1], 2);
}

function raizQuadrada () {

document.getElementById("exibirRaizQuadrada").innerHTML = Math.sqrt(numeroReal[4]);

}

function inteiro () {

    var num1 = numeroReal[4];
    var num2 = numeroReal[0];
    document.getElementById("exibirInteiro").innerHTML = Math.trunc(num1 / num2);

}

function arredondaParaCima () {
    var num1 = numeroReal[2];
    var num2 = numeroReal[0];
    document.getElementById("exibirArredondaParaCima").innerHTML = Math.round(num1 / num2);
}

function arredondaParaBaixo () {
    var num1 = numeroReal[4];
    var num2 = numeroReal[3];
    document.getElementById("exibirArredondaParaBaixo").innerHTML = Math.round(num1 / num2);
}
