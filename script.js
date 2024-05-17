const header = document.querySelector('header');
const name = document.getElementById('name');

let posX = header.clientWidth / 2;
let posY = header.clientHeight / 2;
let dx = 2; 
let dy = 2; 

function moveName() {
    posX += dx;
    posY += dy;


    if (posX + name.offsetWidth / 2 >= header.clientWidth) {
        posX = header.clientWidth - name.offsetWidth / 2;
        dx = -dx;
    }

    if (posX - name.offsetWidth / 2 <= 0) {
        posX = name.offsetWidth / 2;
        dx = -dx;
    }

    if (posY + name.offsetHeight / 2 >= header.clientHeight) {
        posY = header.clientHeight - name.offsetHeight / 2;
        dy = -dy;
    }

    if (posY - name.offsetHeight / 2 <= 0) {
        posY = name.offsetHeight / 2;
        dy = -dy;
    }

    name.style.left = posX + 'px';
    name.style.top = posY + 'px';
}

setInterval(moveName, 20);
