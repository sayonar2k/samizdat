import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const onResize = () => {
        const width = window.innerWidth;

        if (width < 580) {
            const buttonMobile = document.querySelector('.mobile-btn');
            const menuMobile = document.querySelector('.mobile-block');
            const btnCloseMobileMenu = document.querySelector('.mobile-menu__close');

            buttonMobile.onclick = () => {
                menuMobile.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            btnCloseMobileMenu.onclick = () => {
                document.body.style.overflow = '';
                menuMobile.classList.remove('active');
            }
        }
    }

    onResize();

    window.addEventListener('resize', onResize);


    // on click continue logic

    const introBtn = document.querySelector('.intro__button');

    introBtn.onclick = () => {
        const firstIdElement = document.getElementById('first');
        const mainElement = document.querySelector('.main');
        const mainContent = document.getElementById('second-content');

        if (!firstIdElement || !mainElement || !mainContent) {
            return
        }

        mainElement.setAttribute('id', 'second-main');
        firstIdElement.setAttribute('id', 'second');

        mainElement.innerHTML = mainContent.innerHTML;
        mainContent.remove();

        return;

    }
})