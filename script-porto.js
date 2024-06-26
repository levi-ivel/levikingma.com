//function for making my name bounce around the screen
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

//function for changing the color of my name depending on the background
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

//function for the GitHub graph & Stats
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

    const totalContributions = pushEvents.length;

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

//function for changing the language
$('[lang]').hide(); 
$('[lang="nl"]').show(); 
$('#lang-switch').change(function () {
    var lang = $(this).val(); 
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'ko':
            $('[lang]').hide();
            $('[lang="nl"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="nl"]').show();
        }
});

//function for chaos
document.getElementById('disable-gravity').addEventListener('click', function() {
    document.querySelectorAll('body *').forEach(element => {
        if (!element.classList.contains('no-float') && element.id !== 'disable-gravity') {
            element.classList.toggle('zero-gravity');
            if (element.classList.contains('zero-gravity')) {
                enableZeroGravity(element);
            } else {
                disableZeroGravity(element);
            }
        }
    });
});

function enableZeroGravity(element) {
    const rect = element.getBoundingClientRect();
    element.style.position = 'fixed';
    element.style.top = rect.top + 'px';
    element.style.left = rect.left + 'px';
    element.style.width = rect.width + 'px';
    element.style.height = rect.height + 'px';
    element.dx = (Math.random() - 0.5) * 4; 
    element.dy = (Math.random() - 0.5) * 4; 
    element.zeroGravityInterval = setInterval(() => {
        moveElement(element);
    }, 20);
}

function disableZeroGravity(element) {
    clearInterval(element.zeroGravityInterval);
    element.style.position = '';
    element.style.top = '';
    element.style.left = '';
    element.style.width = '';
    element.style.height = '';
}

function moveElement(element) {
    const rect = element.getBoundingClientRect();
    let newTop = rect.top + element.dy;
    let newLeft = rect.left + element.dx;

    if (newTop <= 0) {
        newTop = 0;
        element.dy = -element.dy; 
    } else if (newTop + rect.height >= window.innerHeight) {
        newTop = window.innerHeight - rect.height;
        element.dy = -element.dy;
    }

    if (newLeft <= 0) {
        newLeft = 0;
        element.dx = -element.dx; 
    } else if (newLeft + rect.width >= window.innerWidth) {
        newLeft = window.innerWidth - rect.width;
        element.dx = -element.dx; 
    }

    element.style.top = newTop + 'px';
    element.style.left = newLeft + 'px';
}

