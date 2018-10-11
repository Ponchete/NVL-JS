var impares = [];
var pares = [];
for (var i =0; i <51; i++){
	aux = Math.floor((Math.random() * 100) + 1);
	if (aux%2 === 0){
		pares.append(aux)
	}else{
		impares.append(aux)
	}

}