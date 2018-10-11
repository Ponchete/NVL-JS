function par_impar(x){
	if (x%2===0){
		return('El numero ',x,' es par');
	}else{
		return('El numero ',x,' es impar');
	}
}

for (var i =0;i<51;i++){
	aux = Math.floor((Math.random() * 100) + 1);
	par_impar(aux);
}