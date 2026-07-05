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
})