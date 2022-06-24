// criar uma URL para armazenar a URL a ser executada
const url = "https://thatcopy.pw/catapi/rest"

// funcao para consumir a API

async function getCat() {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
}

getCat()