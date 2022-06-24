// Comparador de tipos de números 

function compararNums(a = 0, b = 0) {
    var tipo;
    (a === b) ? tipo = "são iguais": tipo = "não são iguais";
    var soma = a + b;
    var maior10, menor20;
    (soma > 10) ? maior10 = "maior": maior10 = "menor";
    (soma = < 20) ? menor20 = "menor": menor20 = "maior";
    console.log(`Os números ${a} e ${b} ${tipo}. Sua soma é ${soma}, que é ${maior10} que 10 e ${menor20} que 20!`)
}
compararNums(15, 5)