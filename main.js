$(document).ready(function () {

    function foreward() {
        var currentActive = $(".slider-wrapper .active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("last")) {
            $(".slider-wrapper .first").addClass("active");
        }
        else {
            $(currentActive).next().addClass("active");
        }
    }


    function backward() {
        var currentActive = $(".slider-wrapper .active");

        $(currentActive).removeClass("active");

        if ($(currentActive).hasClass("first")) {
            $(".slider-wrapper .last").addClass("active");
        }
        else {
            $(currentActive).prev().addClass("active");
        }
    }

    // metodo per avanzare in avanti nelle immagini cliccando sulla freccia destra
    $(".slider-wrapper .next > i").click(function () {
        foreward();
    });


    // metodo per tornare indietro nelle immagini cliccando sulla freccia sinistra
    $(".slider-wrapper .prev > i").click(function () {
        backward();
    });

    // torna indietro alla pressione della freccia sinistra (37)
    // avanza alla pressione della freccia destra (39)
    $(document).keydown(function (e) {
        if (e.which == 37) { backward(); }
        if (e.which == 39) { foreward(); }
    })


    $(".nav > i").click(function () {

        var index = $(this).index();
        $("img, .nav i").removeClass("active");

        // var indexImg = index + 1;
        // $(`img:nth-child(${indexImg})`).addClass("active");

        $("img").eq(index).addClass("active");

        $(this).addClass("active");

    });

}
)