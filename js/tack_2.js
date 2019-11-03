
document.querySelector('#Work_1').onmousemove = function (event) {
    document.querySelector('#offx').innerHTML = event.offsetX;
    document.querySelector('#offy').innerHTML = event.offsetY;
    let moveDiv = document.getElementById('mousediv');
    let x = event.offsetX;
    let y = event.offsetY;
    if (x > 0 && y > 0) {
        moveDiv.style.top = (y) + 'px';
        moveDiv.style.left = (x) + 'px';
    }else {
        moveDiv.style.top = '0 px';
        moveDiv.style.left = '0 px';
    }
}; 