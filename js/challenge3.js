$("#ch3form").submit(function(){
    if (!$("input[name= 'standing']:checked").val() || (!$("input[name= 'fruit']:checked").val())){
        alert('You did not fill out all the fields');
        return false;
      }
});
    

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;
    
    // alert("You must pick a fruit!")
    // return false;
  