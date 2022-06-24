function mostrarIdade(nome = "Default", idade = 0) {
    console.log(`A idade de ${nome} é ${idade} anos!`)
}

function mostrarCidade(nome = "Default", cidade = "Default") {
    console.log(`A cidade de ${nome} é ${cidade}!`)
}

function mostrarHobby(nome = "Default", hobby = "Viajar") {
    console.log(`O hobby de ${nome} é ${hobby} anos!`)
}

export {
    mostrarIdade,
    mostrarCidade,
    mostrarHobby
}