 var CryptoJS = 
 
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

    var character = $("#searchInput").val().trim();
    var queryURL = "http://www.omdbapi.com/?t=" + character + "&y=&plot=short&apikey=40e9cece";

    $.ajax({
      url: queryURL,
      method: "GET"
        }).done(function(response) {
        
        var firstRow = $("table")
        .children()
        .eq(1)
        .children("tr")
        .eq(0)
        .children("td");

         // api information set in table
      firstRow.eq(0).text(response.Title);

      firstRow.eq(1).text(response.Actors);

      firstRow.eq(2).text(response.Plot);
          
        });

          function refreshPage(){
            window.location.reload();
            }      
    });
 
