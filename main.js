$(document).ready(function () {

    // metodo per avanzare in avanti nelle immagini cliccando sulla freccia destra
    $(".next > i").click(function () {

        var currentActive = $(".active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("last")) {
            $(".first").addClass("active");
        }
        else {
            $(currentActive).next().addClass("active");
        }
    });


    // metodo per tornare indietro nelle immagini cliccando sulla freccia sinistra
    $(".prev > i").click(function () {

        var currentActive = $(".active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("first")) {
            $(".last").addClass("active");
        }
        else {
            $(currentActive).prev().addClass("active");
        }
    });



}
)