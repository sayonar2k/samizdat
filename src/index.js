import './styles/main.scss';

const getPagePath = pathname => pathname.replace(/\/index\.html$/, '/');

document.addEventListener('DOMContentLoaded', () => {
    let cleanupCurrentPage = () => {};
    let currentPagePath = getPagePath(window.location.pathname);
    let navigationRequest = 0;

    const disposeCurrentPage = () => {
        cleanupCurrentPage();
        cleanupCurrentPage = () => {};
        document.body.style.overflow = '';
    }

    const scrollToTop = () => {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;

        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
        document.documentElement.style.scrollBehavior = previousScrollBehavior;
    }

    const scrollToUrl = url => {
        const targetId = decodeURIComponent(url.hash.slice(1));
        const target = targetId ? document.getElementById(targetId) : null;

        if (target) {
            target.scrollIntoView({behavior: 'smooth', block: 'start'});
            return;
        }

        scrollToTop();
    }

    const initMobileMenu = () => {
        const buttonMobile = document.querySelector('.mobile-btn');
        const menuMobile = document.querySelector('.mobile-block');
        const btnCloseMobileMenu = document.querySelector('.mobile-menu__close');

        if (!buttonMobile || !menuMobile || !btnCloseMobileMenu) {
            return;
        }

        buttonMobile.onclick = () => {
            menuMobile.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        btnCloseMobileMenu.onclick = () => {
            document.body.style.overflow = '';
            menuMobile.classList.remove('active');
        }
    }

    const initContentPage = () => {
        const blockDropsBtns = document.querySelectorAll('.block-drops__btn');
        const popupQuestion = document.getElementById('popup2');
        const popupQuestionClose = document.querySelector('.question-content__close');
        const popupQuestionTitle = popupQuestion?.querySelector('.question-content__title');
        const popupQuestionDescription = popupQuestion?.querySelector('.question-content__description');
        const disabledCollectedLinks = document.querySelectorAll('.collection__item.disabled');
        const sections = document.querySelectorAll('.content-edition');
        const links = document.querySelectorAll('.collection__link');

        disabledCollectedLinks.forEach(link => {
            link.classList.remove('disabled');
        })

        const closeQuestion = () => {
            popupQuestion?.classList.remove('question-mark-popup_active');
            document.body.style.overflow = '';
        }

        if (popupQuestion && popupQuestionClose && popupQuestionTitle && popupQuestionDescription) {
            blockDropsBtns.forEach(blockDropsBtn => {
                blockDropsBtn.onclick = () => {
                    const parentElement = blockDropsBtn.closest('.block-drops__item');
                    const contentTitle = parentElement?.querySelector('.block-drops__title')?.innerHTML;
                    const contentDescription = parentElement?.querySelector('.block-drops__description')?.innerHTML;

                    if (!contentTitle || !contentDescription) {
                        return;
                    }

                    popupQuestionTitle.innerHTML = contentTitle;
                    popupQuestionDescription.innerHTML = contentDescription;
                    popupQuestion.classList.add('question-mark-popup_active');
                    document.body.style.overflow = 'hidden';
                }
            })

            popupQuestion.onclick = event => {
                if (event.target === popupQuestion) {
                    closeQuestion();
                }
            }

            popupQuestionClose.onclick = closeQuestion;
        }

        const findSectionLink = section => Array.from(links).find(link => {
            const url = new URL(link.href, window.location.href);
            return url.hash === `#${section.id}`;
        });

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const currentLink = findSectionLink(entry.target);

                if (!entry.isIntersecting) {
                    currentLink?.classList.remove('active');
                    return;
                }

                links.forEach(link => link.classList.remove('active'));
                currentLink?.classList.add('active');

                const sectionUrl = new URL(window.location.href);
                sectionUrl.hash = entry.target.id;
                window.history.replaceState({}, '', sectionUrl);
            });
        }, {
            rootMargin: '-120px 0px -120px 0px',
            threshold: 0
        });

        sections.forEach(section => observer.observe(section));

        return () => {
            observer.disconnect();
            closeQuestion();
        }
    }

    const initAboutPage = () => {
        const notes = document.querySelectorAll('.about__note');
        const popup = document.getElementById('note-popup');
        const popupImage = popup?.querySelector('.note-popup__image');

        if (notes.length === 0 || !popup || !popupImage) {
            return;
        }

        let closeTimer;
        let openRequest = 0;

        const closeNote = () => {
            openRequest += 1;
            window.clearTimeout(closeTimer);
            popup.classList.remove('note-popup_active');
            document.body.style.overflow = '';

            closeTimer = window.setTimeout(() => {
                popup.classList.remove('note-popup_prepared');
                popup.setAttribute('aria-hidden', 'true');
            }, 520);
        }

        const onKeydown = event => {
            if (event.key === 'Escape' && popup.classList.contains('note-popup_prepared')) {
                closeNote();
            }
        }

        notes.forEach(note => {
            note.onclick = async () => {
                const image = note.querySelector('img');

                if (!image) {
                    return;
                }

                const requestId = ++openRequest;

                window.clearTimeout(closeTimer);
                popupImage.src = image.src;
                popupImage.alt = image.alt;

                try {
                    await popupImage.decode();
                } catch (error) {
                    // The browser can still display the image if decode is unavailable.
                }

                if (requestId !== openRequest) {
                    return;
                }

                popup.classList.add('note-popup_prepared');
                popup.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                popup.focus();

                window.requestAnimationFrame(() => {
                    window.requestAnimationFrame(() => {
                        if (requestId === openRequest) {
                            popup.classList.add('note-popup_active');
                        }
                    })
                })
            }
        })

        popup.onclick = event => {
            if (event.target === popup) {
                closeNote();
            }
        }

        document.addEventListener('keydown', onKeydown);

        return () => {
            openRequest += 1;
            window.clearTimeout(closeTimer);
            document.removeEventListener('keydown', onKeydown);
        }
    }

    const initErrorPage = () => {
        const ratButton = document.querySelector('.error__rat');
        const rats = document.querySelectorAll('.error__rat-image');

        if (!ratButton || rats.length === 0) {
            return;
        }

        let activeRat = 0;

        ratButton.onclick = () => {
            rats[activeRat].classList.remove('error__rat-image_active');
            activeRat = (activeRat + 1) % rats.length;
            rats[activeRat].classList.add('error__rat-image_active');
            ratButton.setAttribute('aria-label', `Показать следующую крысу. Сейчас крыса ${activeRat + 1} из ${rats.length}`);
        }
    }

    const initPage = () => {
        const cleanups = [];

        initMobileMenu();

        const introBtn = document.querySelector('.intro__button');

        if (introBtn) {
            introBtn.onclick = () => {
                navigateTo(new URL('./content.html', window.location.href));
            }
        }

        if (document.querySelector('#second-main .content-edition')) {
            const cleanupContent = initContentPage();

            if (cleanupContent) {
                cleanups.push(cleanupContent);
            }
        }

        if (document.querySelector('.about__note')) {
            const cleanupAbout = initAboutPage();

            if (cleanupAbout) {
                cleanups.push(cleanupAbout);
            }
        }

        if (document.querySelector('.error__rat')) {
            initErrorPage();
        }

        cleanupCurrentPage = () => {
            cleanups.forEach(cleanup => cleanup());
        }
    }

    const syncBody = nextBody => {
        Array.from(document.body.attributes).forEach(attribute => {
            document.body.removeAttribute(attribute.name);
        });

        Array.from(nextBody.attributes).forEach(attribute => {
            document.body.setAttribute(attribute.name, attribute.value);
        });

        document.body.innerHTML = nextBody.innerHTML;
    }

    const navigateTo = async (target, {historyAction = 'push'} = {}) => {
        const url = target instanceof URL ? target : new URL(target, window.location.href);
        const targetPagePath = getPagePath(url.pathname);

        if (targetPagePath === currentPagePath) {
            navigationRequest += 1;
            document.documentElement.classList.remove('spa-loading');

            if (historyAction === 'push' && url.href !== window.location.href) {
                window.history.pushState({}, '', url);
            }

            scrollToUrl(url);
            return;
        }

        const requestId = ++navigationRequest;

        document.documentElement.classList.add('spa-loading');

        try {
            const response = await fetch(`${url.pathname}${url.search}`, {
                headers: {'X-Requested-With': 'spa-navigation'}
            });

            if (!response.ok) {
                throw new Error(`Navigation failed with status ${response.status}`);
            }

            const html = await response.text();
            const nextDocument = new DOMParser().parseFromString(html, 'text/html');

            if (!nextDocument.body) {
                throw new Error('Navigation response does not contain a body');
            }

            nextDocument.querySelectorAll('script').forEach(script => script.remove());

            if (requestId !== navigationRequest) {
                return;
            }

            disposeCurrentPage();
            syncBody(nextDocument.body);

            if (!url.hash) {
                scrollToTop();
            }

            document.title = nextDocument.title;
            currentPagePath = targetPagePath;

            if (historyAction === 'push') {
                window.history.pushState({}, '', url);
            }

            initPage();

            if (url.hash) {
                window.requestAnimationFrame(() => {
                    window.requestAnimationFrame(() => scrollToUrl(url));
                });
            }
        } catch (error) {
            window.location.assign(url.href);
        } finally {
            if (requestId === navigationRequest) {
                document.documentElement.classList.remove('spa-loading');
            }
        }
    }

    document.addEventListener('click', event => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        const link = event.target.closest('a[href]');

        if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) {
            return;
        }

        const href = link.getAttribute('href')?.trim();

        if (!href || href === '#') {
            event.preventDefault();
            return;
        }

        const url = new URL(href, window.location.href);

        if (url.origin !== window.location.origin || !['http:', 'https:'].includes(url.protocol)) {
            return;
        }

        event.preventDefault();
        navigateTo(url);
    });

    window.addEventListener('popstate', () => {
        navigateTo(new URL(window.location.href), {historyAction: 'none'});
    });

    initPage();
    scrollToUrl(new URL(window.location.href));
})
