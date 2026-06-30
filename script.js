window.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-block');
    const mobileMenuButton = document.querySelector('.mobile-btn');
    const mobileMenuCloseButton = document.querySelector('.mobile-menu__close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu .navigation__link');

    const setMenuState = (isOpen) => {
        if (!mobileMenu || !mobileMenuButton) {
            return;
        }

        mobileMenu.classList.toggle('active', isOpen);
        mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    if (mobileMenu && mobileMenuButton && mobileMenuCloseButton) {
        mobileMenuButton.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('active');
            setMenuState(!isOpen);
        });

        mobileMenuCloseButton.addEventListener('click', () => {
            setMenuState(false);
        });

        mobileMenuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                setMenuState(false);
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 576) {
                setMenuState(false);
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setMenuState(false);
            }
        });
    }

    const ratToggleButton = document.querySelector('[data-rat-toggle]');
    const ratToggleImage = document.querySelector('[data-rat-image]');

    if (ratToggleButton && ratToggleImage) {
        const ratImages = ratToggleButton.dataset.ratImages
            .split(',')
            .map((path) => path.trim())
            .filter(Boolean);

        let ratIndex = 0;

        ratToggleButton.addEventListener('click', () => {
            ratIndex = (ratIndex + 1) % ratImages.length;
            ratToggleImage.src = ratImages[ratIndex];
            ratToggleButton.setAttribute(
                'aria-label',
                `Сменить вариацию крысы, сейчас показана вариация ${ratIndex + 1}`
            );
        });
    }
});
