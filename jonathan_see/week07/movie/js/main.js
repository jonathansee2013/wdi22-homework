$(document).ready( function() {

  var searchResults;

  console.log('All sorted.');

  var doMovieSearch = function ( query ) {

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

      // Don't run the rest of the function is the state is not 4 (finished receiving response )
      if( xhr.readyState !== 4 ) {
        return;
      }

      console.log('FINISHED!');

      var searchResults = JSON.parse( xhr.responseText );
      console.log('searchResults = ', searchResults);

      for (var i = 0; i < searchResults.results.length; i++) {
        var result = searchResults.results[i];

        console.log(i, result.title, result.id); // searchResults.results[i].title

        var $para = $('<p class="result">').html(result.title).attr('movie-id', result.id); // create new detached DOM node

        $('#main').append($para); // append new node to div#main

      } //for

    }; // response handler

    xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query="+ query);
    xhr.send();

  };


  $('button').on('click', function() {
    console.log("working!");
    var result = $('#movie_search').val();
    doMovieSearch(result);
  });

  var getMovieDetails = function ( movieId ) {

    var detail = new XMLHttpRequest();

    detail.onreadystatechange = function() {

      // Don't run the rest of the function is the state is not 4 (finished receiving response )
      if( detail.readyState !== 4 ) {
        return;
      }

      console.log('FINISHED!');

      var movieDetails = JSON.parse( detail.responseText );
      console.log('movieDetails = ', movieDetails);

      $title = $('<p class="result">').html(result.title).attr('movie-id', result.id); // create new detached DOM node


      for (var i = 0; i < movieDetails.results.length; i++) {
        var result = movieDetails.results[i];

        console.log(i, result.title, result.id); // searchResults.results[i].title

        var $para = $('<p class="result">').html(result.title).attr('movie-id', result.id); // create new detached DOM node

        $('#main').append($para); // append new node to div#main

      } //for

    }; // response handler

    detail.open("GET", "https://api.themoviedb.org/3/movie/"+ movieId +"?api_key=24d863d54c86392e6e1df55b9a328755");
    detail.send();

  };


  $(document).on("click", ".result", function() {
      // click handling code for all elements with class="result", whenever they are added to page
      var movieId = $(this).attr('movie-id');
      console.log( movieId );

      getMovieDetails(movieId);
      // getMovieDetails( id );
      // "https://api.themoviedb.org/3/movie/IDHERE?api_key=24d863d54c86392e6e1df55b9a328755"

    });


}); // document ready



//   $(document).on("click", "img#poster", function(){
//     // click handling code for all <img id="poster"> elements, whenever they're added
//   });
