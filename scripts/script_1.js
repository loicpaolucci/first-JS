



$(document).ready(function() {
	let name = "";
	while(name == "") {
	  name = prompt("Hello comment tu t'appel ?");
	}
	let output = `Hello ${name}`
	console.log(output);
	document.getElementById("demo").textContent += output;
});
