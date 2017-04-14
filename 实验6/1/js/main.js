$(function () {
    $("body").click(function (e) {
        let $showimg = $("#showimg");
        if ($(".ui-img-show").length || e.target.src) {
            $showimg.attr("src",e.target.src);
            $showimg.toggleClass("ui-img-none");
            $showimg.toggleClass("ui-img-show");
            $(".ui-box").toggleClass("blur");
        }
    });
});