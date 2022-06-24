function calculaIdade(anos = 1) {
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

const pessoa1 = {
    nome: "Hariel",
    idade: 23
}

const pessoa2 = {
    nome: "Lucas",
    idade: 23
}

const animal = {
    nome: "Tufão",
    idade: 14,
    raca: "Vira-lata"
}

console.log(calculandoIdade.call(pessoa1, 34))
console.log(calculandoIdade.apply(pessoa2, [100]))