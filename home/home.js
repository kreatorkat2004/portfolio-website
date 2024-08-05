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

    function animateText(element) {
        const text = element.innerText.replace('\n', '');
        element.innerHTML = text.split('').map(letter => {
            if (letter === ' ') return ' ';
            return `<span>${letter}>`;
        }).join('');
        element.querySelectorAll('span').forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    function animateElement(element, animationClass) {
        element.classList.add(animationClass);
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
});
