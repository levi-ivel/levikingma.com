// Update timer every second
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = 'It is currently ' + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();