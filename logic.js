var apiKey = "nbK18x0ISG5t92eb5tltkQ4AGX71uGUU";

$("#findGif").on("click", function(event){
    event.preventDefault();
    var gif = $("#input").val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+ apiKey +"&q="+ gif +"&limit=25&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        console.log(response.data[0].images.fixed_height.url);
        for(let i = 0; i < 10; i++){
            var gifUrl = response.data[i].images.fixed_height.url;
            var image = $("<img>");
            image.attr("src", gifUrl);
            $("#pageBody").append(image);
        }
    })
})
