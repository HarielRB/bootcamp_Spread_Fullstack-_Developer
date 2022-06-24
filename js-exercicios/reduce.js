const nums = [3, 5, 6, 78]

function somaNumsArr(arr){
	return arr.reduce(function(total, cv){ return total + cv})
}

console.log(somaNumsArr(nums));

function pricesReturn(arr, saldo){
	return arr.reduce(function(total, cv){ return total - cv}, saldo)
// o menos é pq eu estou realizando a soma negativa então o resultado é negativo

}
console.log(pricesReturn(nums, 400));