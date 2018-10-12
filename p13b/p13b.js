function palindromo (palabra){
	var palabra =palabra.toLowerCase():
	palabra = JSON.parse(palabra);
	var reves = palabra.reverse();
	if (palabra == reves){
		print("Son palindromos");
	}else{
		print("No son palindromos");
	}
}