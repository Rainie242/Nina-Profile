import { years } from "./model/years.js";
import { AuthorName } from "./model/AuthorName.js";
import { backToTop } from "./model/backToTop.js";
import { headerButton } from "./model/headerButton.js";

$(function () {
    backToTop();
});

window.addEventListener("load", () => {
    headerButton();
});

$('#headerArea').load('./components/header/header.html', function () {
    const nowpage = $('body').data('page');
    $(`button[data-page="${nowpage}"]`).addClass('active');
});

$('#footerArea').load('./components/footer/footer.html', function () {
    years();
    AuthorName();
});