



$(document).ready(function() {
	function factorial(n) {
	  return (n != 1) ? n * factorial(n - 1) : 1;
	}

	let number = -1;
	while(number < 0) {
	  number = prompt("Choisi un chiffre pour voir sa factoriel");
	}
	let output =  "Le facteur de " + number + " c'est : " + factorial(number);
	console.log(output);
	document.getElementById("result").textContent += output;
});