$(document).ready(function () {

    function foreward() {
        var currentActive = $(".active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("last")) {
            $(".first").addClass("active");
        }
        else {
            $(currentActive).next().addClass("active");
        }
    }


    function backward() {
        var currentActive = $(".active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("first")) {
            $(".last").addClass("active");
        }
        else {
            $(currentActive).prev().addClass("active");
        }
    }

    // metodo per avanzare in avanti nelle immagini cliccando sulla freccia destra
    $(".next > i").click(function () {
        foreward();
    });


    // metodo per tornare indietro nelle immagini cliccando sulla freccia sinistra
    $(".prev > i").click(function () {
        backward();
    });

    // avanza alla pressione della freccia destra (39)
    $(document).keydown(function (e) {
        if (e.which == 39) { foreward(); }
    })

    // torna indietro alla pressione della freccia sinistra (37)
    $(document).keydown(function (e) {
        if (e.which == 37) { backward(); }
    })


}
)