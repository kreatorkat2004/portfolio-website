document.addEventListener('DOMContentLoaded', () => {
    const fadeInTextH1 = document.querySelector('.intro h1.fade-in-left-letter-by-letter');
    const fadeInTextH2 = document.querySelector('.intro h2.fade-in-left-letter-by-letter');
    const contactButton = document.querySelector('.contact-button.pop-in');

    function animateText(element) {
        const text = element.innerText.replace('\n', '');
        element.innerHTML = text.split('').map(letter => {
            if (letter === ' ') return ' ';
            return `<span>${letter}</span>`;
        }).join('');
        element.querySelectorAll('span').forEach((span, index) => {
            span.style.animationDelay = `${index * 0.1}s`;
        });
    }

    function animateContactButton(element) {
        element.style.animation = 'popIn 2s ease forwards';
    }

    animateText(fadeInTextH1);
    animateText(fadeInTextH2);
    animateContactButton(contactButton);
});
