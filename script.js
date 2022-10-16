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

    document.getElementById("exibeResultado").innerHTML = text;

}

function exibirFrutasDoWhile() {

    let text = "";
    let i = 0;
    do {
        text += frutas[i] + "<br>";
        i++;
    }
    while (i < 10);
    document.getElementById("exibeResultado").innerHTML = text;
}

function exibirFrutasFor() {

    let i = 0;
    let text = "";
    for (; frutas[i];) {
        text += frutas[i] + "<br>";
        i++;
    }

    document.getElementById("exibeResultado").innerHTML = text;
}

function exibirFrutasForEach() {

    let text = "";
    frutas.forEach(myFunction);

    document.getElementById("exibeResultado").innerHTML = text;

    function myFunction(item) {
        text += item + "<br>";
    }

}

function tabuada() {
    var num = 2;
    var resultado = document.getElementById('exibeResultado');
    var tabuada = '';

    for (var count = 1; count <= 10; count++)
        tabuada += num + " x " + count + " = " +
            num * count + "<br />";

            resultado.innerHTML = tabuada;
}

const numeroReal = [2, 4, 5, 7, 9];

function quadrado () {
    document.getElementById("exibeResultado").innerHTML = Math.pow(numeroReal[1], 2);
}

function raizQuadrada () {

document.getElementById("exibeResultado").innerHTML = Math.sqrt(numeroReal[4]);

}

function inteiro () {

    var num1 = numeroReal[4];
    var num2 = numeroReal[0];
    document.getElementById("exibeResultado").innerHTML = Math.trunc(num1 / num2);

}

function arredondaParaCima () {
    var num1 = numeroReal[2];
    var num2 = numeroReal[0];
    document.getElementById("exibeResultado").innerHTML = Math.round(num1 / num2);
}

function arredondaParaBaixo () {
    var num1 = numeroReal[4];
    var num2 = numeroReal[3];
    document.getElementById("exibeResultado").innerHTML = Math.round(num1 / num2);
}
