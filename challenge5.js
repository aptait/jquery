console.log("here")
var imgs = $("img");
var msg = "Hover over an image below."

	$(this).mouseover(function() {
	 	$('#image').css("background-image", "url('this')");
	 	$('#image').html("imgs[i].alt");
	 });

	 $(this).focus(function() {
	 	$('#image').css("background-image", "url('this')");
		$('#image').html("imgs[i].alt");
	 });

	 $(this).click(function() {
		 $(this).mouseleave();
	 	$('#image').css("background-image", "url('this')");
	 	$('#image').html("msg");
	 });

	 $(this).blur(function() {
	 	$('#image').css("backgroundImage", "url('this')");
	 	$('#image').html("msg");
	 });
