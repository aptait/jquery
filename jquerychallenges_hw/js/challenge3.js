ch3form.onsubmit = function() {
	console.log("here")
	var fruit =
	document.querySelectorAll('input[name="fruit"]');


	for (let i = 0; i < fruit.length;i++){
		if (fruit[i].checked){
			console.log(fruit[i].value)
			return true;
		}
	}

	alert("You must pick a fruit");
	return false;
}