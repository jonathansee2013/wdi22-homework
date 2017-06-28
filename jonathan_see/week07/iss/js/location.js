$(document).ready(function() {

  var exactLocation = function(){

    var baseURL = "http://api.open-notify.org/iss-now.json";
    // $.getJSON(baseURL, function(data) {
    //   console.log(data['number'])
    // })
    // $.ajax().done().fail();

    $.ajax({
      url: baseURL,
      method: "GET",
      dataType: "JSONP"
    })
    .done(function ( now ) {
      console.log( now );
      // debugger;

      var $latitude = $('<div class="latitude">').html(now.iss_position.latitude);
      $('#coordinates').append($latitude);
      $(isslocation.lat).push(now.iss_position.latitude);
      // $('#coordinates').remove();

      var $longitude = $('<div class="longitude">').html(now.iss_position.longitude);
      $('#coordinates').append($longitude);
      $(isslocation.lat).push(now.iss_position.longitude);
      // $('#coordinates').remove();
    })
    .fail(function(xhr, status, err){
      console.log(xhr, status, err);
    });

  };

  exactLocation();
  setInterval(exactLocation, 3000);

});
