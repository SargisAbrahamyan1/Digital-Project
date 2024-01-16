const loadMore = document.getElementById('loadMore');
$(document).ready(function () {
    $(".project__intro").slice(0, 3).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".project__intro:hidden").slice(0, 1).slideDown();
        if ($(".project__intro:hidden").length == 0) {
            loadMore.style.display = 'none';
        }
    });
    if ($(".project__intro").length == 3) {
        loadMore.style.display = 'none';
    }
});