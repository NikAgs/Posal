function banner() {
    var code = '<div class="at-banner"> <div class="at-banner__content"> <div class="at-banner__text">Your information has been submitted!</div></div><div class="at-banner__close"></div></div>';
    $("body").append(code);
}

jQuery('body').on('click', '.at-banner__close', function () {
    jQuery(this).parent().remove();
});

$("#submit-demo").click(function () {
    banner();
});
