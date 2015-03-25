$(document).ready(function () {
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: true,
        pause: 8000,
        pager: false
    });

    $("#btnProduct").click(function () {
        $('html, body').animate({
            scrollTop: $("#product").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnService").click(function () {
        $('html, body').animate({
            scrollTop: $("#service").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnTeam").click(function () {
        $('html, body').animate({
            scrollTop: $("#team").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnCareer").click(function () {
        $('html, body').animate({
            scrollTop: $("#career").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnAbout").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnBlogs").click(function () {
        $('html, body').animate({
            scrollTop: $("#blog").offset().top - $('#menu').height()
        }, 500);

    });

    $("#btnContact").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - $('#menu').height()
        }, 500);
    });

    $('.menu').affix({
        offset: {
            top: $('#header').height()
        }
    });

});


