$(document).ready(function () {
//$(window).load(function () {
    $('.bxslider').bxSlider({
        pager: false,
        controls: true
    });

    function registerScrollLocation(buttonId, destinationId){
        $("#"+buttonId).click(function () {
            $('html, body').animate({
                scrollTop: $("#"+destinationId).offset().top - $('#menu').height()
            }, 500);

        });
    }

    registerScrollLocation('product-btn', 'product');
    registerScrollLocation('service-btn', 'service');
    registerScrollLocation('team-btn', 'team');
    registerScrollLocation('career-btn', 'career');
    registerScrollLocation('about-btn', 'about');
    registerScrollLocation('blogs-btn', 'blog');
    registerScrollLocation('contact-btn', 'contact');
    registerScrollLocation('home-btn', 'header');

    $('.menu').affix({
        offset: {
            top: $('#header').height()
        }
    });

});


