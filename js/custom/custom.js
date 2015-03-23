$(document).ready(function () {

    $('.bxslider').bxSlider();

    $("#btnTeam").click(function () {
        $('html, body').animate({
            scrollTop: $("#team").offset().top
        }, 1000);

    });

    $("#btnService").click(function () {
        $('html, body').animate({
            scrollTop: $("#service").offset().top
        }, 1000);

    });

    $("#btnAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);

    });

    $("#btnContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);

    });

    $('.menu').affix({
        offset: {
            top: $('#header').height()
        }
    });

});


