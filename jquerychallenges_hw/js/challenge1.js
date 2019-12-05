subscribe.onchange = function() {
	var x = document.querySelector("#emailField");
		if (this.checked){
			console.log("selected");
			x.style.display = "block";
		} else {
			console.log("Not selected");
			x.style.display = "none"
		}
}



















// // subscribe.onchange = function() {
// 	console.log("I have been clicked!!!");

// }