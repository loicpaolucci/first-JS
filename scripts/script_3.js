$(document).ready(function() {
	function htmlPyramid(size,n) {
		consoleOutput += "\n"
		for(let i=0; i < n; i++){
		    consoleOutput += " ";
		}
		for(let i=n; i < size; i++){
			consoleOutput += "#";
		}
		if(n > 0){
			htmlPyramid(size,n-1);
		}
	}

	let input = 0;
	while(input <= 0) {
	  input = prompt("combien voulez vous d'étage dans votre pyramid");
	}
	var consoleOutput =  `voici ta pyramid ${input} :`;
	document.getElementById("result").textContent += consoleOutput;
	htmlPyramid(input,input);
	//display de la pyramide en console
	console.log(consoleOutput);
	//display in html
	let html = consoleOutput;
	for(let i=0; i <= input; i++){
		html = html.replace("\n","<br />")
	}
	$('#result').html(html);
});
