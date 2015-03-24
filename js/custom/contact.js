$(document).ready(function () {

    function initialize_map(map_id, latitude, longitude) {
        var map_canvas = document.getElementById(map_id);
        var officeLocation = new google.maps.LatLng(latitude, longitude);
        var map_options = {
            center: officeLocation,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(map_canvas, map_options);
        var marker = new google.maps.Marker({
            position: officeLocation,
            map: map,
            title: "Sahaj Software Solutions"
        });
        return map;
    }

    var bangalore_map = initialize_map('bangalore-map', 12.908405, 77.634900);
    var chennai_map = initialize_map('chennai-map', 12.9792387, 80.2291912);

    $('#chennai-selector').click(function () {
        $('.office-contact').addClass('hidden');
        $('#chennai-contact').removeClass('hidden');
        var center = chennai_map.getCenter();
        google.maps.event.trigger(chennai_map, 'resize');
        chennai_map.setCenter(center)
    });

    $('#bangalore-selector').click(function () {
        $('.office-contact').addClass('hidden');
        $('#bangalore-contact').removeClass('hidden');
        var center = bangalore_map.getCenter();
        google.maps.event.trigger(bangalore_map, 'resize');
        bangalore_map.setCenter(center);
    })

});