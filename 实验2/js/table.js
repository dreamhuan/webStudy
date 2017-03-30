window.onload = function () {
    // let tbl = document.querySelector('#tbl');
    // let td11 = document.querySelector('#td11');
    // let td12 = document.querySelector('#td12');
    // let td21 = document.querySelector('#td21');
    // let td22 = document.querySelector('#td22');
    // let td31 = document.querySelector('#td31');
    // let td32 = document.querySelector('#td32');
    // td11.onclick = function () {
    //     tbl.className += ' bg-red';
    // };
    // td12.onclick = function () {
    //     td12.innerHTML = formatDate(new Date());
    // };
    // td21.onclick = function () {
    //     let trNext = td21.parentNode.nextSibling;
    //     let trNew = document.createElement('tr');
    //     let tdn1 = document.createElement('td');
    //     let tdn2 = document.createElement('td');
    //     tdn1.innerHTML = 'n1';
    //     tdn2.innerHTML = 'n2';
    //     trNew.appendChild(tdn1);
    //     trNew.appendChild(tdn2);
    //     trNext.parentNode.insertBefore(trNew, trNext);
    // };
    // td22.onclick = function () {
    //     td22.parentNode.parentNode.removeChild(td22.parentNode);
    // };
    // td31.onclick = function (e) {
    //     td31.innerHTML = '(' + e.clientX + ',' + e.clientY + ')';
    // };
    // td32.onclick = function () {
    //     window.open('https://www.taobao.com/');
    // };

    let tbl = document.querySelector('#tbl');
    tbl.onclick = function (e) {
        let node = e.target;
        console.log(e.target);
        if (node.id === 'td11') {
            tbl.className += ' bg-red';
        } else if (node.id === 'td12') {
            node.innerHTML = formatDate(new Date());
        } else if (node.id === 'td21') {
            let trNext = node.parentNode.nextSibling;
            let trNew = document.createElement('tr');
            trNew.innerHTML = 'new line';
            trNext.parentNode.insertBefore(trNew, trNext);
        } else if (node.id === 'td22') {
            node.parentNode.remove();
        } else if (node.id === 'td31') {
            node.innerHTML = '(' + e.clientX + ',' + e.clientY + ')';
        } else if (node.id === 'td32') {
            window.open('https://www.taobao.com/');
        }
    };
};
function formatDate(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
}

