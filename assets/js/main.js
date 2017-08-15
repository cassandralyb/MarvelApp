  
  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    console.log("i clicked it");


/* this is the person searched by the user when the user clickes the "user-search" button */
      var character = $("#searchInput").val().trim();
/* this is the giphyURL, which captures the person searched by the user */
      var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=3";
/* this is the AJAX call for the giphyURL */
      $.ajax({
          url: giphyURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          
          for (var i = 0; i < results.length; i++) {
            
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            personImage.attr('id','gifsize')
            $("#showGifs").prepend(personImage);
          }
          
        });
/* this is the person searched by the user when the user clickes the "user-search" button */
      var person = $("#searchInput").val().trim();
/* this is the marvelURL, which captures the person searched by the user */
      var marvelURL = "https://gateway.marvel.com:443/v1/public/characters?name=" +
        person + "&apikey=7b3c258aeabb823fef48eaa48dbfbbdc";
 /* this is the AJAX call for the marvelURL */
      $.ajax({
          url: marvelURL,
          method: "GET"
        })
        .done(function(response) {
          console.log("marvelAPI");
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            
            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);
            $("#showGifs").prepend(personImage);
            $(personImage).attr('id','resizeGif');
           }
          
        });

        function changeImage() {
        (document.getElementById("imgClickAndChange").src == "https://api.giphy.com/v1/gifs/search?q=" +
        character + "&api_key=dc6zaTOxFJmzC&limit=1") 
    }
          function refreshPage(){
            window.location.reload();
    } 

  });
