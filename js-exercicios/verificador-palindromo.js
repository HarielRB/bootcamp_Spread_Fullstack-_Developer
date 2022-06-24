function palinVerify(str) {
    let text = str.replace(/ /g, "").toLowerCase().split("").join("")
    let inverse = str.replace(/ /g, "").toLowerCase().split("").reverse().join("")
    let itIs;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === inverse[i]) {
            itIs = true;
        } else {
            itIs = false;
            break
        }
    }
    (itIs === true) ? console.log("Palindromo!"): console.log("Não!")
}
palinVerify("Peixe")
palinVerify("A base do teto desaba")