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
        $(".delete").unbind('click').click(del); //事件绑定不是替代，是叠加，所以先解绑
    });

    function del(e) {
        //console.log(1); //16行直接绑定的话前面的几个item会绑定好多删除事件，会输出好多1
        $(this).parent().remove();
        let len = $(".ui-box-item-index").length;
        for (let i = 0; i < len; i++) {
            $(".ui-box-item-index").eq(i).text(i + 1);
        }
    }
});

