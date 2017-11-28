jQuery(document).ready(function ($) {
    //call dropdown hover and on load & resize
    $(window).resize(function () {
        enableHover();
    });
    enableHover();
});

//emable hover when window > 767px 
function enableHover() {
    if ($(window).width() > 767) {
        $('#menu-dropdown').hover(function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
        }, function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
        });
    } else {
        $('nav.navbar li.dropdown').unbind('mouseenter mouseleave')
    }
}
