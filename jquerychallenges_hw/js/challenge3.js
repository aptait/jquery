$("#ch3form").submit = function() {
	console.log("fruit");
	var fruit = $('input[name="fruit"]');
	var fruitcheck = false;

	var standingcheck = false;
	var standing = $('input[name="standing"]');

	fruit.each(function() {
		if(this.checked) {
			console.log("A fruit was checked");
			fruitcheck= true;
		}
	
	});

	standing.each(function() {
		if(this.checked) {
			console.log("A standing was checked")
			standingcheck =true;
		}
	});

	if (fruitcheck && standingcheck)
		return true;

	else {
		if (!fruitcheck && !standingcheck)
		  alert("You must pick a fruit and standing")
	}
		else if (!standingcheck){
		  alert("you must pick a standing")
	}

		else {
		  alert("You must pick a fruit")
	}
		return false;
	}
});
