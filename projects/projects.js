document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    const horizontalScrollbar = document.querySelector('.horizontal-scrollbar');

    horizontalScrollbar.innerHTML = '<div style="width:' + mainContent.scrollWidth + 'px"></div>';

    horizontalScrollbar.addEventListener('scroll', () => {
        mainContent.scrollLeft = horizontalScrollbar.scrollLeft;
    });

    mainContent.addEventListener('scroll', () => {
        horizontalScrollbar.scrollLeft = mainContent.scrollLeft;
        adjustDuplicatePosition();
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

    function adjustDuplicatePosition() {
        document.querySelectorAll('.project-box-duplicate').forEach(duplicate => {
            const projectBox = duplicate.previousElementSibling;
            const rect = projectBox.getBoundingClientRect();
            duplicate.style.top = `${rect.top}px`;
            duplicate.style.left = `${rect.right + 20}px`;
        });
    }

    window.addEventListener('resize', adjustDuplicatePosition);
    window.addEventListener('scroll', adjustDuplicatePosition);

    // Add event listeners for the view more buttons
    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const projectDetails = button.previousElementSibling;
            if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
                projectDetails.style.display = 'block';
                button.textContent = 'View Less';
            } else {
                projectDetails.style.display = 'none';
                button.textContent = 'View More';
            }
        });
    });
});
