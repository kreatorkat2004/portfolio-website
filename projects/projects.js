document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const horizontalScrollbar = document.querySelector('.horizontal-scrollbar');

    if (horizontalScrollbar) {
        horizontalScrollbar.innerHTML = '<div style="width:' + mainContent.scrollWidth + 'px"></div>';

        horizontalScrollbar.addEventListener('scroll', () => {
            mainContent.scrollLeft = horizontalScrollbar.scrollLeft;
        });

        mainContent.addEventListener('scroll', () => {
            horizontalScrollbar.scrollLeft = mainContent.scrollLeft;
        });
    }

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (hamburgerMenu && dropdownMenu) {
        hamburgerMenu.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show');
        });
    }

    const fadeInText = document.querySelector('.fade-in-left-letter-by-letter');
    if (fadeInText) {
        const text = fadeInText.innerText.replace('\n', '');
        fadeInText.innerHTML = text.split('').map(letter => {
            if (letter === ' ') return ' ';
            return `<span>${letter}</span>`;
        }).join('');
        fadeInText.querySelectorAll('span').forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
