function exibirFrutasWhile() {

    const cars = [
        "Banana",
        "Maça",
        "Uva",
        "Laranja",
        "Abacaxi",
        "Pêssego",
        "Morango",
        "Goiaba",
        "Manga",
        "Kiwi",];

    let i = 0;
    let text = "";
    while (cars[i]) {
        text += cars[i] + "<br>";
        i++;
    }

    document.getElementById("exibirFrutasWhile").innerHTML = text;

}

function exibirFrutasDoWhile() {

    const cars = [
        "Banana",
        "Maça",
        "Uva",
        "Laranja",
        "Abacaxi",
        "Pêssego",
        "Morango",
        "Goiaba",
        "Manga",
        "Kiwi",];

    let text = "";
    let i = 0;
    do {
        text += cars[i] + "<br>";
        i++;
    }
    while (i < 10);
    document.getElementById("exibirFrutasDoWhile").innerHTML = text;
}

function exibirFrutasFor() {

    const cars = [
        "Banana",
        "Maça",
        "Uva",
        "Laranja",
        "Abacaxi",
        "Pêssego",
        "Morango",
        "Goiaba",
        "Manga",
        "Kiwi",];

    let i = 0;
    let text = "";
    for (; cars[i];) {
        text += cars[i] + "<br>";
        i++;
    }

    document.getElementById("exibirFrutasFor").innerHTML = text;
}

function exibirFrutasForEach() {

    const cars = [
        "Banana",
        "Maça",
        "Uva",
        "Laranja",
        "Abacaxi",
        "Pêssego",
        "Morango",
        "Goiaba",
        "Manga",
        "Kiwi",];

    let text = "";
    cars.forEach(myFunction);

    document.getElementById("exibirFrutasForEach").innerHTML = text;

    function myFunction(item) {
        text += item + "<br>";
    }

}

// -----------------------------------------------------------------

function tabuada() {
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada = '';

    for (var count = 1; count <= 10; count++)
        tabuada += num + " x " + count + " = " +
            num * count + "<br />";

    resposta.innerHTML = tabuada;
}

// Crie um array com 5 números reais e para cada elemento utilize funções matemáticas para exibir respectivamente:
// O quadrado
// A raiz quadrada
// Apenas a parte inteira
// O número arredondado para baixo
// O número arredondado para cima
// Resultado:

// Arquivo em formato .js com essas respostas
