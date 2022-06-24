const title = document.getElementById("page-title")

const button = document.getElementById("mode-selector")

const body = document.body


// o Tag Name retorna um array contendo todos os elementos em índices
// então é importante referenciar qual elemento eu vou acessar utilizando
// o indice do array
const foot = document.getElementsByTagName("footer")

// o método classList permite manipular as classes de um elemento HTML podendo
// setar novas classes ou remove-las
// o .toggle funciona assim: caso tenha a classe ele remove e vice versa

function changeLigthMode() {
    // basta validar uma vez para verificar se todos possuem a classe dark-mode
    if (verificandoClasse(title)) {
        title.classList.remove("dark-mode")
        button.classList.remove("dark-mode")
        foot[0].classList.remove("dark-mode")
        body.classList.remove("dark-mode")
        button.innerText = "Dark Mode"
        title.innerText = "Light Mode ON"

    } else {

        title.classList.add("dark-mode")
        button.classList.add("dark-mode")
        foot[0].classList.add("dark-mode")
        body.classList.add("dark-mode")
        button.innerText = "Light Mode"
        title.innerText = "Dark Mode ON"

    }

}

button.addEventListener("click", changeLigthMode)


// o metodo matches busca determinado atributo, no caso classe, no emelemento

function verificandoClasse(tag) {
    return tag.matches(".dark-mode")
}