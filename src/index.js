import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    let height = document.documentElement.clientHeight || window.innerHeight;
    const onResize = () => {
        const width = window.innerWidth;
        height = document.documentElement.clientHeight || window.innerHeight;

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
    const container = document.querySelector('.container');


    if (introBtn) {
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

            initContentPage();
        }
    }

    const initContentPage = () => {
        const blockDropsBtns = document.querySelectorAll('.block-drops__btn');
        const popupQuestion = document.getElementById('popup2');
        const popupQuestionClose = document.querySelector('.question-content__close');
        const popupQuestionTitle = popupQuestion.querySelector('.question-content__title');
        const popupQuestionDescription = popupQuestion.querySelector('.question-content__description');
        const disabledCollectedLinks = document.querySelectorAll('.collection__item.disabled');


        if (blockDropsBtns.length === 0 || !popupQuestion || !popupQuestionClose || !popupQuestionTitle || !popupQuestionDescription) {
            return;
        }

        function onClosePopup() {
            popupQuestion.classList.remove('question-mark-popup_active');
            document.body.style.overflow = '';
        }

        disabledCollectedLinks.forEach(link => {
            link.classList.remove('disabled');
        })

        blockDropsBtns.forEach(blockDropsBtn => {
            blockDropsBtn.onclick = () => {
                const parentElement = blockDropsBtn.closest('.block-drops__item');
                let contentTitle = parentElement?.querySelector('.block-drops__title').innerHTML;
                let contentDescription = parentElement?.querySelector('.block-drops__description').innerHTML;

                popupQuestionTitle.innerHTML = contentTitle;
                popupQuestionDescription.innerHTML = contentDescription;

                popupQuestion.classList.add('question-mark-popup_active');
                document.body.style.overflow = 'hidden';
            }
        })

        popupQuestion.onclick = e => {
            if (e.target.classList.contains('question-mark-popup_active')) {
                onClosePopup()
            }
        }

        popupQuestionClose.onclick = () => {
            onClosePopup()
        }


        // observer logic

        const options = {
            rootMargin: "-120px 0px -120px 0px",
            threshold: 0
        }

        const sections = document.querySelectorAll(".content-edition");
        const links = document.querySelectorAll(".collection__link");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    document
                        .querySelector(`a[href="#${entry.target.id}"]`)
                        .classList.remove("active");

                    return;
                }

                links.forEach(link => link.classList.remove("active"));

                document
                    .querySelector(`a[href="#${entry.target.id}"]`)
                    .classList.add("active");
            });
        }, options);

        sections.forEach(section => observer.observe(section));

    }

    const pathname = window.location.pathname;

    const initAboutPage = () => {
        const notes = document.querySelectorAll('.about__note');
        const popup = document.getElementById('note-popup');
        const popupImage = popup?.querySelector('.note-popup__image');

        if (notes.length === 0 || !popup || !popupImage) {
            return;
        }

        const closeNote = () => {
            popup.classList.remove('note-popup_active');
            popup.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        notes.forEach(note => {
            note.onclick = () => {
                const image = note.querySelector('img');

                if (!image) {
                    return;
                }

                popupImage.src = image.src;
                popupImage.alt = image.alt;
                popup.classList.add('note-popup_active');
                popup.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                popup.focus();
            }
        })

        popup.onclick = e => {
            if (e.target === popup) {
                closeNote();
            }
        }

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && popup.classList.contains('note-popup_active')) {
                closeNote();
            }
        })
    }

    if (pathname.includes('content.html')) {
        initContentPage();
    }

    if (pathname.includes('about.html')) {
        initAboutPage();
    }

})
