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

    updateNameColor();
}

function updateNameColor() {
    const nameRect = nameElement.getBoundingClientRect();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInSection = (
            nameRect.top >= rect.top &&
            nameRect.bottom <= rect.bottom &&
            nameRect.left >= rect.left &&
            nameRect.right <= rect.right
        );

        if (isInSection) {
            const bgColor = window.getComputedStyle(section).backgroundColor;
            nameElement.style.color = getContrastingColor(bgColor);
        }
    });
}

function getContrastingColor(bgColor) {
    const rgb = bgColor.match(/\d+/g);
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                                  (parseInt(rgb[1]) * 587) +
                                  (parseInt(rgb[2]) * 114)) / 1000);
    return (brightness > 125) ? 'black' : 'white';
}

setInterval(moveName, 20);

window.addEventListener('resize', () => {
    posX = Math.min(posX, window.innerWidth - nameElement.offsetWidth);
    posY = Math.min(posY, document.documentElement.scrollHeight - nameElement.offsetHeight);
});

async function fetchGitHubStats(username) {
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const repos = await reposResponse.json();

    const eventsResponse = await fetch(`https://api.github.com/users/${username}/events?per_page=100`);
    const events = await eventsResponse.json();

    const contributionsPerMonth = Array(12).fill(0);
    const pushEvents = events.filter(event => event.type === "PushEvent");
    pushEvents.forEach(event => {
        const eventDate = new Date(event.created_at);
        contributionsPerMonth[eventDate.getMonth()]++;
    });

    const totalContributions = pushEvents.length; // Total contributions count based on "PushEvent" type

    return { repos, contributionsPerMonth, totalContributions };
}

function displayGitHubStats({ repos, contributionsPerMonth, totalContributions }) {
    const ctx = document.getElementById('contributionsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Contributions per Month',
                data: contributionsPerMonth,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const totalRepos = repos.length;
    document.getElementById('totalRepos').innerText = `Total Repositories: ${totalRepos}`;
    document.getElementById('totalContributions').innerText = `Total Contributions: ${totalContributions}`;
}

(async () => {
    const username = 'levi-ivel';
    const stats = await fetchGitHubStats(username);
    displayGitHubStats(stats);
})();
