$(document).ready(function() {

  var peopleInSpace = function(){

    var baseURL = "http://api.open-notify.org/astros.json";

    // $.getJSON(baseURL, function(data) {
    //   console.log(data['number'])
    // })
    // $.ajax().done().fail();

    $.ajax({
      url: baseURL,
      method: "GET",
      dataType: "JSONP"
    })
    .done(function ( data ) {
      console.log( data );
      // debugger;

      var $number = $('<div class="number">').html(data.number);
      $('#number').append($number);

      for (var i = 0; i < data.people.length; i++) {
        var person = data.people[i];
        var $people = $('<div class="people">').html(person.name);
        $('#people').append($people);

      }

    })
    .fail(function(xhr, status, err){
      console.log(xhr, status, err);
    });

  };

  $('#spacePeople').click(function() {

    $('#spacePeople').remove();

    peopleInSpace();

  });

});
