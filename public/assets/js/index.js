// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-burger").on("click", function(event){
      let id = $(this).data("id");
      let devouredState = {
        devoured: true
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        alert("Mmmmmm Mmmmmm, That was a tasty burger!");
        location.reload();
      });
    });

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      let newBurger = {
        burger_name: $("#burger-input").val().trim()
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
            // Reload the page to get the updated list
            location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function(event) {
      let id = $(this).data("id");

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
