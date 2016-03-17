$(document).ready(function() {
  $('#missingBike').click(function() {
      city = $('#yourCity').val();
      $('#yourCity').val("");
      $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1' + city).then(function(response){
        if (response.cod ===200) {
          $('#bikeList').text("<li>" + "</li>");
        } else {
          $('#bikeList').text("invalid city");
        }
      });
      // .fail(function(error) {
      //   $('.showWeather').text(error.responseJSON.message);
      // });

      event.preventDefault();
  });
});
