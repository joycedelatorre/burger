$(function() {
    //console.log( "ready!" );

    $(".devour").on("click", function(event){
		event.preventDefault();
		var id = parseInt(this.id);
		// console.log(this.id);
		// var id = $(this).data("id");
		// //var devoured = $(this).data("devoured");
		console.log(id);

		var newDevouredState ={
			devoured: 1
		}
		console.log(newDevouredState);

		$.ajax("/api/burgers/" + id, {
	      type: "PUT",
	      data: newDevouredState
	    }).then(
	      function() {
	        console.log("changed devoured to", newDevouredState);
	        // Reload the page to get the updated list
	        location.reload();
	      }
	    );

    });


    $(".form-to-add").on("submit", function(event){
    		event.preventDefault();

    		var newBurger = {
    			burger_name: $("#addBurger").val().trim(),
    			devoured:0,
    		};

    		$.ajax("/api/burgers",{
    			type:"POST",
    			data:newBurger
    		}).then(
    		function(){
    			console.log("newBurger");
    			location.reload();
    		});
    	});

});