$(document).ready(function () {

    // metodo per avanzare in avanti nelle immagini
    $(".next > i").click(function () {

        var imgActive = $("img.active");

        $(imgActive).removeClass("active");

        if ($(imgActive).hasClass("last")) { $("img.first").addClass("active"); }
        else { $(imgActive).next().addClass("active"); }


    });


    // metodo per tornare indietro nelle immagini
    $(".prev > i").click(function () {

        var imgActive = $("img.active");

        $(imgActive).removeClass("active");

        if ($(imgActive).hasClass("first")) { $("img.last").addClass("active"); }
        else { $(imgActive).prev().addClass("active"); }


    });









}
)