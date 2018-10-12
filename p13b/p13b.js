function palindromo (palabra){
	palabra = palabra.split();
	reves = palabra.reverse();
	if (palabra == reves){
		print("Son palindromos");
	}else{
		print("No son palindromos");
	}
}