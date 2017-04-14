$(function () {
    $(".btn").click(function (e) {
        $(".btn").removeClass("bgc-gray");
        $(this).addClass("bgc-gray");
        $(".cot").addClass("none");
        $(".cot").eq($(this).index()).removeClass("none");
    });
});