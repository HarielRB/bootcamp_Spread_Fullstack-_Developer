function getAdmin(myMap){
	let admins = []
	for([key, value] of map){
	// iterando chaves do map e os valores
		if(value === admin){
			admins.push(key);
}
}
	
return admins
}

const usuarios = new Map();

usuarios.set("Hariel", "admin");
usuarios.set("Harianne", "admin");
usuarios.set("Leo", "admin");
usuarios.set("Paula", "manager");

console.log(getAdmin(usuarios));



