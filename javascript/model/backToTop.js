export function backToTop() {
    const $button = $('#backToTop');

    $(window).on("scroll", function () {
        const footerTop = $("#footerArea").offset().top;
        const screenBottom = $(window).scrollTop() + $(window).height();

        if ($(window).scrollTop() > 300 && screenBottom < footerTop) {
            $button.fadeIn();
        }
        else {
            $button.fadeOut();
        }
    }); 

    $button.on("click", function () {
        window.scrollTo({top:0,behavior:"smooth"});
    });
}