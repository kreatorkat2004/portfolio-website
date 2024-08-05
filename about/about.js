document.addEventListener('DOMContentLoaded', () => {
    const fadeInTextH1 = document.querySelector('.intro h1.fade-in-left-letter-by-letter');
    const fadeInTextH2 = document.querySelector('.intro h2.fade-in-left-letter-by-letter');
    const aspiringText = document.querySelector('.intro p.aspiring');
    const subtitleText = document.querySelector('.intro p.subtitle');
    const contactButton = document.querySelector('.contact-button');
    const profilePicture = document.querySelector('.profile-picture');
    const menuToggle = document.getElementById('menuToggle');
    const fullScreenMenu = document.getElementById('fullScreenMenu');
    const closeMenu = document.getElementById('closeMenu');
    const fullScreenNavItems = document.querySelectorAll('.full-screen-nav-item');
    const bubblesBox = document.querySelector('.bubbles-box');

    function animateText(element) {
        if (!element) return; 
        const text = element.innerText.replace('\n', '');
        element.innerHTML = text.split('').map(letter => {
            return letter === ' ' ? ' ' : `<span>${letter}</span>`;
        }).join('');
        element.querySelectorAll('span').forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    function animateElement(element, animationClass) {
        if (element) {
            element.classList.add(animationClass);
        }
    }

    animateText(fadeInTextH1);
    animateText(fadeInTextH2);
    animateElement(aspiringText, 'fade-in');
    animateElement(subtitleText, 'fade-in');
    animateElement(contactButton, 'pop-in');
    animateElement(profilePicture, 'pop-in');

    menuToggle.addEventListener('click', () => {
        fullScreenMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        fullScreenNavItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('active');
            }, index * 100);
        });
    });

    closeMenu.addEventListener('click', () => {
        fullScreenMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
        fullScreenNavItems.forEach(item => {
            item.classList.remove('active');
        });
    });

    function handleResize() {
        if (window.innerWidth > 768) {
            fullScreenMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
            fullScreenNavItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    document.querySelectorAll('.skill-buttons button').forEach(button => {
        button.addEventListener('click', () => {
            showSkills(button.textContent);
        });
    });

    showSkills('Languages');

    function generateBubbles(skills, layout, specialCases = {}) {
        if (!bubblesBox) return; 
        bubblesBox.innerHTML = '';

        const bubbleWidth = 100; 
        const bubbleHeight = 100; 
        const containerWidth = bubblesBox.clientWidth;
        const containerHeight = bubblesBox.clientHeight;
        const startX = (containerWidth - (bubbleWidth * layout[0])) / 2;
        const startY = (containerHeight - (bubbleHeight * layout.length)) / 2;

        let index = 0;
        layout.forEach((row, rowIndex) => {
            for (let i = 0; i < row; i++) {
                if (index >= skills.length) break;
                const skill = skills[index];

                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                const img = document.createElement('img');
                img.src = getImagePath(skill.name);
                img.alt = skill.name;
                bubble.appendChild(img);
                bubblesBox.appendChild(bubble);

                let currentX = startX + (i * bubbleWidth);
                let currentY = startY + (rowIndex * bubbleHeight);

                if (specialCases[skill.name]) {
                    const { x, y } = specialCases[skill.name];
                    currentX = startX + (x * bubbleWidth);
                    currentY = startY + (y * bubbleHeight);
                }

                bubble.style.left = `${currentX}px`;
                bubble.style.top = `${currentY}px`;

                index++;
            }
        });
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
            button.style.display = button.textContent === type ? 'none' : 'inline-block';
        });

        const layouts = {
            'Libraries': [3, 3, 3],
            'Tools': [3, 3, 2],
            'Languages': [3, 3, 2],
            'Frameworks': [3, 2]
        };

        const specialCases = {
            'Tools': {
                'Docker': { x: 1, y: 2 }
            },
            'Languages': {
                'C++': { x: 1, y: 2 }
            },
            'Frameworks': {
                'Node.js': { x: 0.5, y: 1 },
                'React.js': { x: 1.5, y: 1 }
            }
        };

        generateBubbles(skillsData[type], layouts[type], specialCases[type] || {});
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
