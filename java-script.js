const menuButton = document.querySelector('.menu-btn');
const mobMenu = document.querySelector('.mob-menu');

menuButton.addEventListener('click', showMenu);

function showMenu() {
    mobMenu.classList.add('is-open');
    mobMenu.addEventListener('click', e => {
        if (e.target.nodeName !== 'BUTTON') return;
        mobMenu.classList.remove('is-open');
        mobMenu.removeEventListener('click');
        e.stopPropagation();
    })
}