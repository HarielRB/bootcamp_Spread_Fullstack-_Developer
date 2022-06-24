var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function oddIdent(num){
	return num % 2 === 0;
}

console.log(arr.filter(oddIdent))