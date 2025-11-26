// Update timer every second
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (!timeElement) return;
    
    const now = new Date();
    timeElement.textContent = 'It is currently ' + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();