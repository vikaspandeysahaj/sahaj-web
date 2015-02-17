$( document ).ready(function() {

    var map_canvas = document.getElementById('map_canvas');
    //var officeLocation = new google.maps.LatLng(12.9085971, 77.6350528);
    var officeLocation = new google.maps.LatLng(12.908405, 77.634900);
    var map_options = {
      center: officeLocation,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, map_options);
    var marker = new google.maps.Marker({
    position: officeLocation,
    map: map,
    title:"Sahaj Software Solutions"
    }); 
    google.maps.event.addDomListener(window, 'load');


  $( "#btnTeam" ).click(function() {
     $('html, body').animate({
      scrollTop: $("#team").offset().top }, 1000);

   });

   $( "#btnService" ).click(function() {
       $('html, body').animate({
        scrollTop: $("#service").offset().top }, 1000);

   });

   $( "#btnAbout" ).click(function() {
          $('html, body').animate({
           scrollTop: $("#about").offset().top }, 1000);

      });

   $( "#btnContact" ).click(function() {
            $('html, body').animate({
             scrollTop: $("#contact").offset().top }, 1000);

    });

  });


