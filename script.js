
let clicksCounter = 0;

$('.navbar-toggler').click(function () {
    clicksCounter++;
    if (clicksCounter % 2 !== 1) {
        $('.navbar.navbar-expand-lg').css({
            "height": "initial"
        });
        $('body').css({"overflow": "initial"});
        $(this).css({
            "position": "relative"
        });
        $('.navbar-brand').show();
        $('.navbar.navbar-expand-lg .container-fluid').removeClass('justify-content-center');
        $('.main-navigation').removeClass('text-center');
        $('.main-navigation li').each(function () {
            $(this).css({
                "padding": "0px 8px"
            });
        });
        $('.main-navigation li a').each(function () {
            $(this).css({
                "font-size": "14px"
            });
        });
        $('.right-element').each(function () {
            $(this).show();
        });
        $('.navbar-toggler .top-bar').css({"top": "0"});
        $('.navbar-toggler .bottom-bar').css({"top": "20px"});
        $(this).css({"border": "none"});
    } else {
        $('.navbar.navbar-expand-lg').css({
            "height": "100vh"
        });
        $('body').css({"overflow": "hidden"});
        $(this).css({
            "position": "absolute",
            "top": "8%"
        });
        $('.navbar-brand').hide();
        $('.navbar.navbar-expand-lg .container-fluid').addClass('justify-content-center');
        $('.main-navigation').addClass('text-center');
        $('.main-navigation li').each(function () {
            $(this).css({
                "padding-top": "10px",
                "padding-bottom": "10px"
            });
        });
        $('.main-navigation li a').each(function () {
            $(this).css({
                "font-size": "14px"
            });
        });
        $('.right-element').each(function () {
            $(this).hide();
        });

        $('.navbar-toggler .top-bar').css({"top": "10px"});
        $('.navbar-toggler .bottom-bar').css({"top": "10px"});
        $(this).css({"padding": "11px", "border": "2px solid", "border-radius": "17px"});

    }
});