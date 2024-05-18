const nameElement = document.getElementById('name');
let posX = Math.random() * window.innerWidth;
let posY = Math.random() * window.innerHeight;
let dx = 2; 
let dy = 2; 

function moveName() {
    posX += dx;
    posY += dy;

    if (posX + nameElement.offsetWidth >= window.innerWidth) {
        posX = window.innerWidth - nameElement.offsetWidth;
        dx = -dx;
    }
    if (posX <= 0) {
        posX = 0;
        dx = -dx;
    }
    if (posY + nameElement.offsetHeight >= document.documentElement.scrollHeight) {
        posY = document.documentElement.scrollHeight - nameElement.offsetHeight;
        dy = -dy;
    }
    if (posY <= 0) {
        posY = 0;
        dy = -dy;
    }

    nameElement.style.left = posX + 'px';
    nameElement.style.top = posY + 'px';
}

setInterval(moveName, 20);

window.addEventListener('resize', () => {
    posX = Math.min(posX, window.innerWidth - nameElement.offsetWidth);
    posY = Math.min(posY, document.documentElement.scrollHeight - nameElement.offsetHeight);
});
