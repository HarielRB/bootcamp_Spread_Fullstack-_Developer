function valoresUnicos(arr){
	const mySet = new Set(arr);
	return [...mySet];
	// para retornar um array é necessario criar um array vazio e adicionar cada elemento do set criado nesse array por meio do rest
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5]