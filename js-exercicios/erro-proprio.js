function verificaArray(arr, num){
	try{
		if(!arr && !num) throw new ReferenceError("Parâmetros Inválidos!");

		if(typeof(arr) !== "object") throw new TypeError("Array inválido!");

		if(typeof(num) !== 'number') throw new TypeError("Número Inválido!");

		if(arr,length !== num) thow new RangeError("Tamanho não compatível!")

	return arr;

}

	catch(e){
		if(e instanceof RangeError){
		console.log('RangeError!');
		console.log(e.stack)
	}
	} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
}
	

}]

// o erro.stack

console.log(validaArrays([1, 2, 3], 0));