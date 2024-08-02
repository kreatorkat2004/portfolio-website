document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const horizontalScrollbar = document.querySelector('.horizontal-scrollbar');
    const bubblesBox = document.querySelector('.bubbles-box');
    const titleElement = document.querySelector('.intro1 h1');

    horizontalScrollbar.innerHTML = '<div style="width:' + mainContent.scrollWidth + 'px"></div>';

    horizontalScrollbar.addEventListener('scroll', () => {
        mainContent.scrollLeft = horizontalScrollbar.scrollLeft;
    });

    mainContent.addEventListener('scroll', () => {
        horizontalScrollbar.scrollLeft = mainContent.scrollLeft;
    });

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    hamburgerMenu.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });

    const fadeInText = document.querySelector('.fade-in-left-letter-by-letter');
    const text = fadeInText.innerText.replace('\n', ''); 
    fadeInText.innerHTML = text.split('').map(letter => {
        if (letter === ' ') return ' ';
        return `<span>${letter}</span>`;
    }).join('');
    fadeInText.querySelectorAll('span').forEach((span, index) => {
        span.style.animationDelay = `${index * 0.2}s`;
    });

    document.querySelectorAll('.skill-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            showSkills(button.textContent);
        });
    });

    showSkills('Languages'); 

    function generateBubbles(skills) {
        bubblesBox.innerHTML = '';

        const bubbleWidth = 100;
        const bubbleHeight = 100;
        const containerWidth = bubblesBox.clientWidth;
        const titleRect = titleElement.getBoundingClientRect();
        const bubblesBoxRect = bubblesBox.getBoundingClientRect();
        let currentX = 0;
        let currentY = titleRect.top - bubblesBoxRect.top;
        const maxBubblesPerRow = 3;

        skills.forEach((skill, index) => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            const img = document.createElement('img');
            img.src = getImagePath(skill.name);
            img.alt = skill.name;
            bubble.appendChild(img);
            bubblesBox.appendChild(bubble);

            bubble.style.left = `${currentX}px`;
            bubble.style.top = `${currentY}px`;
            bubble.dataset.vx = (Math.random() - 0.5) * 4;
            bubble.dataset.vy = (Math.random() - 0.5) * 4;

            currentX += bubbleWidth;

            if ((index + 1) % maxBubblesPerRow === 0) {
                currentX = 0;
                currentY += bubbleHeight;
            }
        });

        setTimeout(() => {
            requestAnimationFrame(moveBubbles);
        }, 1000);
    }

    function moveBubbles() {
        const bubbles = document.querySelectorAll('.bubble');
        const virtualBoundaryHeight = bubblesBox.clientHeight / 2;

        bubbles.forEach(bubble => {
            let x = parseFloat(bubble.style.left);
            let y = parseFloat(bubble.style.top);
            let vx = parseFloat(bubble.dataset.vx);
            let vy = parseFloat(bubble.dataset.vy);

            x += vx;
            y += vy;

            if (x <= 0 || x + bubble.clientWidth >= bubblesBox.clientWidth) {
                vx = -vx;
                x = Math.max(0, Math.min(x, bubblesBox.clientWidth - bubble.clientWidth));
            }
            if (y <= 0 || y + bubble.clientHeight >= virtualBoundaryHeight) {
                vy = -vy;
                y = Math.max(0, Math.min(y, virtualBoundaryHeight - bubble.clientHeight));
            }

            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;
            bubble.dataset.vx = vx;
            bubble.dataset.vy = vy;
        });

        requestAnimationFrame(moveBubbles);
    }

    function getImagePath(skillName) {
        const specialCases = {
            'HTML/CSS': 'images/about_images/htmlcss.png',
            'Node.js': 'images/about_images/nodejs.png',
            'React.js': 'images/about_images/reactjs.png'
        };

        return specialCases[skillName] || `images/about_images/${encodeURIComponent(skillName.toLowerCase().replace(/ /g, ''))}.png`;
    }

    function showSkills(type) {
        const skillsContainer = document.querySelector('.skills');
        const skillButtons = document.querySelectorAll('.skill-buttons button');

        skillsContainer.innerHTML = ''; 

        skillsData[type].sort((a, b) => b.time - a.time).forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill', 'pop-in');
            skillElement.innerHTML = `
                <span>${skill.name}: ${skill.time} years</span>
                <div class="progress-bar" style="width: ${skill.time * 20}%; background-color: ${skill.color};"></div>
            `;
            skillsContainer.appendChild(skillElement);
        });

        skillButtons.forEach(button => {
            if (button.textContent === type) {
                button.style.display = 'none';
            } else {
                button.style.display = 'inline-block';
            }
        });

        generateBubbles(skillsData[type]);
    }
});

const skillsData = {
    Languages: [
        { name: "Python", time: 4, color: "#34568B" },
        { name: "Java", time: 4, color: "#FF6F61" },
        { name: "SQL", time: 4, color: "#6B5B95" },
        { name: "R", time: 3, color: "#88B04B" },
        { name: "JavaScript", time: 3, color: "#F7CAC9" },
        { name: "HTML/CSS", time: 3, color: "#92A8D1" },
        { name: "C++", time: 1.5, color: "#955251" }
    ],
    Frameworks: [
        { name: "Django", time: 3, color: "#B565A7" },
        { name: "Flask", time: 2, color: "#009B77" },
        { name: "Springboot", time: 1.5, color: "#DD4124" },
        { name: "Node.js", time: 1.5, color: "#D65076" },
        { name: "React.js", time: 1.5, color: "#45B8AC" }
    ],
    Tools: [
        { name: "PostgreSQL", time: 3, color: "#7FCDCD" },
        { name: "PowerBI", time: 3, color: "#8BC34A" },
        { name: "Git", time: 2, color: "#5B5EA6" },
        { name: "AWS", time: 1.5, color: "#9B2335" },
        { name: "Spark", time: 1.5, color: "#DFCFBE" },
        { name: "Hadoop", time: 1.5, color: "#55B4B0" },
        { name: "Docker", time: 1.5, color: "#E15D44" }
    ],

    Libraries: [
        { name: "NumPy", time: 3, color: "#BC243C" },
        { name: "Pandas", time: 3, color: "#BC243C" },
        { name: "Matplotlib", time: 2, color: "#C3447A" },
        { name: "Plotly", time: 2, color: "#C3447A" },
        { name: "Shiny", time: 2, color: "#C3447A" },
        { name: "Ggplot", time: 2, color: "#C3447A" },
        { name: "PyTorch", time: 1.5, color: "#98B4D4" },
        { name: "Scikit-learn", time: 1.5, color: "#98B4D4" },
        { name: "TensorFlow", time: 1.5, color: "#98B4D4" }
    ]
};
