const arr = [1, 2, 3, 4];




// sem o this
function matSemThis(arr){

	return arr.map((num) => (num * 10));
}
console.log(matSemThis(arr))

// com this
function mapComThis(arr, thisArg){
	return arr.map(function(item){item * this.value}, thisArg)
}

var num1 = 34;
var num2 = 3;
console.log(mapComThis(arr, num1));
console.log(mapComThis(arr, num1));

// o thisArg pode referenciar um objeto que se esta utilizando como paramêtro
