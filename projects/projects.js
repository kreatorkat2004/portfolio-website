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

    document.querySelectorAll('.see-more').forEach(button => {
        button.addEventListener('click', () => {
            const projectBox = button.closest('.project-box');
            let duplicate = projectBox.parentNode.querySelector('.project-box-duplicate');

            if (duplicate) {
                duplicate.style.display = duplicate.style.display === 'block' ? 'none' : 'block';
            } else {
                duplicate = document.createElement('div');
                duplicate.classList.add('project-box-duplicate');
                duplicate.innerHTML = `<div class="project-info">
                                          <span>${projectBox.querySelector('.project-info span').innerText}</span>
                                          ${projectBox.querySelector('.more-info').innerHTML}
                                       </div>`;
                projectBox.parentNode.appendChild(duplicate);
                duplicate.style.top = '0px';
                duplicate.style.left = '100%';
                duplicate.style.display = 'block';
            }
        });
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
});
