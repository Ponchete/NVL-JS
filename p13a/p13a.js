function es_primo(peticiones){
	var primos = [];
	if (peticiones === 1){
		primos.append(1);
	} else if (peticiones === 0) {

	} else {
		primos.append(1);
		var num = 3;
		while (length(primos)<peticiones){
			x=1;
			for (var i = 2; i <num; i++) {
				x=x*(num%i);
			}
			if (x){
				primos.append(num);
			}else{
				num+=1;
			}
		}
	}return(primos);
}

//Hay que cambiar n por el numero de primos que se quiera
alert(es_primo(n));