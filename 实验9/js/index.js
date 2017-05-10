const map = new BMap.Map('myMap');                  // 创建Map实例
const point = new BMap.Point(120.128669, 30.273947);//西湖百度坐标
map.centerAndZoom(point, 13);                        // 初始化地图,设置中心点坐标和地图级别(1-19)


/**
 * 添加控件
 */
let opts = {offset: new BMap.Size(0, 0)};      //控件位置偏移
map.addControl(new BMap.MapTypeControl(opts)); //添加地图类型控件
map.addControl(new BMap.NavigationControl());  //平移缩放控件
map.addControl(new BMap.ScaleControl());       //比例尺控件
map.addControl(new BMap.OverviewMapControl()); //缩略图控件

map.setCurrentCity('杭州');                     //设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);               //开启鼠标滚轮缩放

const local = new BMap.LocalSearch('杭州市', {
    renderOptions: {
        map: map,
        autoViewport: true,
        panel: 'result'
    },
    pageCapacity: 7
});
local.searchNearby('宾馆', '西湖');

/**
 * 鼠标点击显示坐标
 */
// map.addEventListener('click', function (e) {
//     alert('鼠标(x,y):  (' + e.point.lng + ', ' + e.point.lat + ') 缩放等级:' + this.getZoom());
//     console.log(this.getCenter());
// });


$('#search').click((e) => {
    const end = $('#end');
    const text = end.val();
    console.log(text);
    if (!text) {
        alert('终点不能为空！');
        return;
    }

    const routePolicy = [BMAP_TRANSIT_POLICY_LEAST_TIME, BMAP_TRANSIT_POLICY_LEAST_TRANSFER, BMAP_TRANSIT_POLICY_LEAST_WALKING, BMAP_TRANSIT_POLICY_AVOID_SUBWAYS];
    const transit = new BMap.TransitRoute(map, {
        renderOptions: {map: map, panel: "result"},
    });
    map.clearOverlays();
    let i = $("#way").val();
    transit.setPolicy(routePolicy[i]);
    transit.search("杭州师范大学仓前新校区", text);
});


$('#myMap').click((e) => {
    $('#end').val(e.target.title);
});

$('#lake').click((e) => {
    map.clearOverlays();
    $('#result').empty().css("border","");
    local.searchNearby('宾馆', '西湖');
});
$('#hznu').click((e) => {
    map.clearOverlays();
    const point = new BMap.Point(120.01525, 30.29515);
    map.centerAndZoom(point, 17);

    $('#result').empty().css("border","1px solid #666").append('<ul id="list" style="padding-left:0;"></ul>');

    const src1 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494267526197&di=9994be8773898df34aa67af48f47a084&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3Dbd464506ca3d70cf4cfaaa05c8dcd1ba%2Ff1307863f6246b60ce4ba54be8f81a4c510fa205.jpg';
    const src2 = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494945481&di=b417fbae380804190b5a01c13490b0a0&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%253D580%2Fsign%3Df01319c6df54564ee565e43183df9cde%2Fe6d59913632762d04e44816aa2ec08fa503dc6a2.jpg';
    const src3 = 'http://img3.imgtn.bdimg.com/it/u=1569897099,1983464238&fm=23&gp=0.jpg';

    //新建三个地图上点
    const points = [
        {'lng': 120.01525, 'lat': 30.29515, 'url': src1, 'id': 'A', 'name': '正门'},
        {'lng': 120.015182, 'lat': 30.29636, 'url': src2, 'id': 'B', 'name': '博文苑8号楼'},
        {'lng': 120.022199, 'lat': 30.298714, 'url': src3, 'id': 'C', 'name': '图书馆'}
    ];
    //创建标注点并添加到地图中
    function addMarker(points) {
        //循环建立标注点
        for (let i = 0, pointsLen = points.length; i < pointsLen; i++) {
            const myIcon = new BMap.Icon("http://map.baidu.com/img/markers.png", new BMap.Size(23, 25), {
                offset: new BMap.Size(10, 25),
                imageOffset: new BMap.Size(0, 0 - i * 25)
            });
            let point = new BMap.Point(points[i].lng, points[i].lat); //将标注点转化成地图上的点
            let marker = new BMap.Marker(point, {icon: myIcon}); //将点转化成标注点
            map.addOverlay(marker);  //将标注点添加到地图上
            //添加监听事件
            (function () {
                let thePoint = points[i];
                marker.addEventListener("click", (e) => showInfo(marker, thePoint));
            })();

            let changey = 0 - i * 25;

            $('#list').append(`
            <li style="margin: 2px 0px; padding: 0px 5px 5px 0px; cursor: pointer; overflow: hidden; line-height: 17px;">
                <span style="background:url(http://api.map.baidu.com/images/markers.png) -23px ${changey}px no-repeat;
                    width:19px;height:25px;
                    cursor:pointer;
                    float:left;
                    *zoom:1;overflow:hidden;
                    margin:2px 3px 0 5px;*margin-right:0px;
                    display:inline;">&nbsp;
                </span>
                <div style="zoom: 1; overflow: hidden; padding: 0px 5px; background-color: rgb(240, 240, 240);">
                    <div style="line-height:30px;font-size:12px;">
                        <span style="color:#00c;">${points[i].name}</span>
                    </div>
                </div>
            </li>`);
        }
    }

    function showInfo(thisMarker, point) {
        //获取点的信息
        const sContent = `
            <div style="width: 300px;height: 200px;">
                <img src = ${point.url} width="300" height="200" title=${point.name}/>
                <h4 style="margin:0 0 5px 0;padding:0.2em 0">杭师大仓前校区</h4>
                <p style="margin:0;line-height:1.5;font-size:13px;text-indent:2em">${point.name}</p>
            </div>`;

        const infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
        thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
    }

    addMarker(points);
});