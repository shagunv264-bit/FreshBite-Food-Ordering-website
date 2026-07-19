const buttons = document.querySelectorAll(".food-card button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        alert("Item added to cart!");

    });

});