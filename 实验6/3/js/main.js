$(function () {
    let $item = $('.row').eq(0).clone();

    $(".delete").click(del);

    $("#add").click(function () {
        let count = $(".row").length;
        if (count > 9) {
            alert("只能添加10个");
            return;
        }
        let $newItem = $item.clone();
        // console.log($($newItem.children()[0]).text());
        $($newItem.children()[0]).text(count + 1);
        $("#items").append($newItem);
        $(".delete").click(del);
    });

    function del() {
        $(this).parent().remove();
        let len = $(".ui-box-item-index").length;
        for (let i = 0; i < len; i++) {
            $(".ui-box-item-index").eq(i).text(i + 1);
        }
    }
});

