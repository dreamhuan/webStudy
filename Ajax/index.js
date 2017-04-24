/**
 * Created by fukai on 2017/4/21 0021.
 */
function CreateXHR(){
    if (window.XMLHttpRequest)
    {
        //对浏览器 IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    else
    {
        //对浏览器 IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function AJAX() {
    let xmlhttp;
    xmlhttp = CreateXHR();
    xmlhttp.open("GET","test.json",true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            let jsonstr = xmlhttp.responseText;
            console.log(jsonstr);
        }
    }
}


//其中xmlhttp.readyState 存有 XMLHttpRequest 的状态，有五个值：
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收
// 3: 请求处理中
// 4: 请求已完成，且响应已就绪
// xmlhttp.staus 的值为请求结果，200表示OK，404表示未找到页面。
// 获取来自服务器的响应，可使用XMLHttpRequest对象的responseText属性[字符串]或 responseXML属性[XML]