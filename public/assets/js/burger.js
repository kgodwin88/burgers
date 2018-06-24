$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devours");
      console.log(devoured)
      var state = ""
        if(devoured === true){
            state = false;
        }
        else{
            state = true;
        }
      var newDevourState = {
        devoured: state
      };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to ", devoured);
          
          
        }

      );
      
    });
    $("#burger-form").on("submit", function(event) {
        
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#new-burger").val().trim(),
          devoured: false,
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });