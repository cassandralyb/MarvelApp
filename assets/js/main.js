  
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

      

        var PRIV_KEY = "privatekey";
        var API_KEY = "7b3c258aeabb823fef48eaa48dbfbbdc";

        function getMarvelResponse() {
        // you need a new ts every request                                                                                    
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + API_KEY);
      
        // the api deals a lot in ids rather than just the strings you want to use
        var characterId = '1009718'; // wolverine                                                                             

        var url = 'http://gateway.marvel.com:80/v1/public/comics';
            alert(hash)
            alert(url)

          console.log(url);
              $.getJSON(url, {
                ts: ts,
                apikey: API_KEY,
                hash: hash,
                characters: characterId
                })
                .done(function(data) {
                  // sort of a long dump you will need to sort through
                  console.log(data);
                })
                .fail(function(err){
                  // the error codes are listed on the dev site
                  console.log(err);
                });
            };

            getMarvelResponse();


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
