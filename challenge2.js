$("#useBilling").click(function(){
	var x = $("#useBilling");
    if (this.checked){
				$("#home").val($("#billing").val());
				$("#home").attr($("disabled, true"));
			}
			else {
				$("#home").val("");
				$("#home").attr($("disabled, false"));
			}
			
	console.log(this.checked);
})
  



// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
	
// 	