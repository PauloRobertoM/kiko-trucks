(function($, window) {
    $('.owl-vitrine').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.owl-modelos').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $("#produtos").mouseenter( function (e) {
        $("#div-produto").show('slow');
    });
    $("#meuMenu").mouseleave( function (e) {
        $("#div-produto").hide('slow');
    });
    $("#item1").hover( function (e) {
        $("#prod1").show('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item2").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").show('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item3").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").show('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item4").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").show('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item5").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").show('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item6").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").show('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item7").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").show('slow');
        $("#prod8").hide('slow');
        $("#prod9").hide('slow');
    });
    $("#item8").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").show('slow');
        $("#prod9").hide('slow');
    });
    $("#item9").hover( function (e) {
        $("#prod1").hide('slow');
        $("#prod2").hide('slow');
        $("#prod3").hide('slow');
        $("#prod4").hide('slow');
        $("#prod5").hide('slow');
        $("#prod6").hide('slow');
        $("#prod7").hide('slow');
        $("#prod8").hide('slow');
        $("#prod9").show('slow');
    });
})(jQuery, window);