function palindromo (palabra){
	 var palabra = palabra.split();
	 var reves = palabra.reverse();
	if (palabra == reves){
		print("Son palindromos");
	}else{
		print("No son palindromos");
	}
}