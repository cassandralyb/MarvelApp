$(document).ready(function() {

        displayResults: function(e) {
            $('#showGIFS').empty();
            e.preventDefault();

            var userQuery = $(this).data('#searchInput');
            var key = "&api_key=dc6zaTOxFJmzC";
            var limit = "&limit=3"
            var reqUrl = "https://api.giphy.com/v1/gifs/search?q=" + userQuery + limit + key;
            // console.log(reqUrl);
            $.ajax({
                url: reqUrl,
                method: "GET"
            }).done(function(response) {

                for (var i = 0; i < response.data.length; i++) {
                    var gifContain = $('<div>');
                    gifContain.addClass('gifContainer');



                    var newImg = $('<img>');

                    newImg.addClass('gif');
                    gifContain.append(newImg);

                    $('#showGIFS').append(gifContain);
                }

            });
        },

}