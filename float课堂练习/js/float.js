let test1 = document.querySelector('#test1');
let test2 = document.querySelector('#test2');
for (let i = 0; i < 10; i++) {
    let divSmall = document.createElement('div');
    divSmall.className += ' small';
    test1.appendChild(divSmall);
}
let divEnd = document.createElement('div');
divEnd.className += ' end';
test1.appendChild(divEnd);

let divBig = document.createElement('div');
divBig.className += ' big';
test2.appendChild(divBig);
for (let i = 0; i < 11; i++) {
    let divSmall = document.createElement('div');
    divSmall.className += ' small';
    test2.appendChild(divSmall);
}
divEnd = document.createElement('div');
divEnd.className += ' end';
test2.appendChild(divEnd);

