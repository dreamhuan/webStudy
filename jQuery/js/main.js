/**
 * Created by fukai on 2017/4/13 0013.
 */

$(function () {
    $("li").eq(0).click(function () {
        $("li").eq(1).text("hello");
    });
    $("li").eq(1).click(function () {
        $("li").eq(0).width(150);
    });
    $("li").eq(2).click(function () {
        $("li").eq(2).css("background-color","red")
    });
    $("li").eq(3).click(function () {
        $("#txt").attr("value","sunday");
    });
    $("li").eq(4).click(function () {
        $("li").eq(4).fadeOut(1000,function () {

        });
    });
});