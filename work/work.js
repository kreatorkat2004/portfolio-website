document.addEventListener('DOMContentLoaded', () => {
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

    const seeMoreBtns = document.querySelectorAll('.see-more-btn');
    seeMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const description = btn.previousElementSibling;
            if (description.style.display === 'none' || !description.style.display) {
                description.style.display = 'block';
                btn.textContent = 'See Less';
            } else {
                description.style.display = 'none';
                btn.textContent = 'See More';
            }
        });
    });
});
