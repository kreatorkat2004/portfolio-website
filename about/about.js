document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const horizontalScrollbar = document.querySelector('.horizontal-scrollbar');

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

    showSkills('Languages'); 
});

const skillsData = {
    Languages: [
        { name: "Python", time: 4, color: "#34568B" },
        { name: "Java", time: 4, color: "#FF6F61" },
        { name: "SQL", time: 4, color: "#6B5B95" },
        { name: "R", time: 3, color: "#88B04B" },
        { name: "JavaScript", time: 3, color: "#F7CAC9" },
        { name: "HTML/CSS", time: 3, color: "#92A8D1" },
        { name: "C", time: 1, color: "#955251" }
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
        { name: "Data Manipulation and Analysis Libraries (NumPy, Pandas)", time: 3, color: "#BC243C" },
        { name: "Data Visualization Libraries (Matplotlib, Plotly, Shiny, Ggplot)", time: 2, color: "#C3447A" },
        { name: "Machine Learning Libraries (PyTorch, Scikit-learn, Tensorflow)", time: 1.5, color: "#98B4D4" }
    ]
};

function showSkills(type) {
    const skillsContainer = document.querySelector('.skills');
    skillsContainer.innerHTML = ''; 

    skillsData[type].sort((a, b) => b.time - a.time).forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `
            <span>${skill.name}: ${skill.time} years</span>
            <div class="progress-bar" style="width: ${skill.time * 20}%; background-color: ${skill.color};"></div>
        `;
        skillsContainer.appendChild(skillElement);
    });

    generateBubbles(skillsData[type].length);
}

function generateBubbles(count) {
    const bubblesContainer = document.querySelector('.bubbles-container');
    bubblesContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        bubble.style.top = `${Math.random() * 90 + 5}%`;
        bubblesContainer.appendChild(bubble);
    }
}
