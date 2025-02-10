// Update timer every second
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = 'It is currently ' + now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime(); 

// Update trademark to current year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll buttons for header and footer
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}