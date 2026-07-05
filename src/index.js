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

        if (!firstIdElement || !mainElement) {
            return
        }

        mainElement.setAttribute('id', 'second-main');
        firstIdElement.setAttribute('id', 'second');

        const dynamicLayout = `
                <section class="content-edition " id="edition1">
                    <div class="title-h2">
                        <div class="title-h2__main">
                            <div class="title-h2__dash"></div>
                            <span class="title-h2__title">ИЗДАНИЕ 1</span>
                            <div class="title-h2__dash"></div>
                        </div>
                        <p class="title-h2__submain">
                            ВЫПУЩЕНО 23.04.26
                        </p>
                    </div>
                    <div class="block-drops content-edition__drops">
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img src="./images/drops/flower_children_1.png" alt="FLOWER CHILDREN изображение спереди">
                                <button>
                                    <img src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img src="./images/drops/flower_children_2.png" alt="FLOWER CHILDREN изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    FLOWER CHILDREN
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img src="./images/drops/old_cavity_1.png" alt="OLD CAVITY изображение спереди">
                                <button>
                                    <img src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img src="./images/drops/old_cavity_2.png" alt="OLD CAVITY изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    OLD CAVITY
                                </div>
                                <p class="block-drops__description">
                                    ЛОНГСЛИВ ИЗ 100% ХЛОПКА. СВОБОДНЫЙ СИЛУЭТ.&nbsp;ШЕЛКОГРАФИЧЕСКИЙ&nbsp;ПРИНТ
                                    СПЕРЕДИ, СЗАДИ И НА ПРАВОМ РУКАВЕ. ИЗДЕЛИЕ БЕЗ ДИСТРЕССА.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 10
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img src="./images/drops/the_mills_1.png" alt="THE MILLS изображение спереди">
                                <button>
                                    <img src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img src="./images/drops/the_mills_2.png" alt="THE MILLS изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    THE MILLS OF GOD
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img src="./images/drops/cielo_drive_1.png" alt="CIELO DRIVE изображение спереди">
                                <button>
                                    <img src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img src="./images/drops/cielo_drive_2.png" alt="CIELO DRIVE изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    CIELO DRIVE, 10050
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 10
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img src="./images/drops/dystopia_1.png" alt="DYSTOPIA изображение спереди">
                                <button>
                                    <img src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img src="./images/drops/dystopia_2.png" alt="DYSTOPIA изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    DYSTOPIA 1968
                                </div>
                                <p class="block-drops__description">
                                    ЛОНГСЛИВ ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ&nbsp;СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ. ДИСТРЕСС&nbsp;ПО&nbsp;ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ&nbsp;ЭКЗЕМПЛЯР&nbsp;УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ&nbsp;ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/corp_values_1.png" alt="CORP. VALUES изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/corp_values_2.png" alt="CORP. VALUES изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    CORP. VALUES
                                </div>
                                <p class="block-drops__description">
                                    КЕПКА ИЗ 100% ХЛОПКА. ВЫШИВКА СПЕРЕДИ И&nbsp;НА&nbsp;ПРАВОЙ&nbsp;СТОРОНЕ.&nbsp;РЕГУЛИРУЕМЫЙ
                                    КОЖАНЫЙ РЕМЕШОК ДЛЯ ИНДИВИДУАЛЬНОЙ ПОСАДКИ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 10
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/cielo_drive_v2_1.png" alt="CIELO DRIVE 2 изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/cielo_drive_v2_2.png" alt="CIELO DRIVE 2 изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    CIELO DRIVE, 10050
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА&nbsp;УКОРОЧЕННЫЙ&nbsp;СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ&nbsp;И&nbsp;СЗАДИ.&nbsp;ДИСТРЕСС&nbsp;ПО&nbsp;ВСЕМУ&nbsp;ИЗДЕЛИЮ.
                                    ЕДИНСТВЕННЫЙ ЭКЗЕМПЛЯР.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="report" class="report">
                    <div class="report__left">
                        <img loading="lazy" src="images/report/v1/left_1.jpg" alt="Фотоотчет 1" class="report__left-first">
                        <img loading="lazy" src="images/report/v1/left_2.jpg" alt="Фотоотчет 2" class="report__left-second">
                    </div>
                    <div class="report__center">
                        <h2 class="report__title">
                            Фотоотчет
                        </h2>
                        <img loading="lazy" src="images/report/v1/center_1.jpg" alt="Фотоотчет 3" class="report__center-first">
                        <img loading="lazy" src="images/report/v1/center_2.jpg" alt="Фотоотчет 4" class="report__center-second">
                        <img loading="lazy" src="images/report/v1/center_3.jpg" alt="Фотоотчет 5" class="report__center-third">
                    </div>
                    <div class="report__right">
                        <img src="images/report/v1/right_1.jpg" alt="Фотоотчет 6" class="report__right-first">
                        <img src="images/report/v1/right_2.jpg" alt="Фотоотчет 7" class="report__right-second">
                    </div>
                </section>
                <section class="content-edition content-edition_v2" id="edition2">
                    <div class="title-h2">
                        <div class="title-h2__main">
                            <div class="title-h2__dash"></div>
                            <span class="title-h2__title">ИЗДАНИЕ 2</span>
                            <div class="title-h2__dash"></div>
                        </div>
                        <p class="title-h2__submain">
                            ВЫПУЩЕНО 16.06.26
                        </p>
                    </div>
                    <div class="block-drops content-edition__drops">
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/hated_in_nation_1.png" alt="HATED IN THE NATION изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/hated_in_nation_2.png" alt="HATED IN THE NATION изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    HATED IN THE NATION
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/socialism_1.png" alt="SOCIALISM изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/socialism_2.png" alt="SOCIALISM изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    РАЗВИТОЙ СОЦИАЛИЗМ
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 10
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/silly_king_1.png" alt="SILLY KING изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/silly_king_2.png" alt="SILLY KING изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    SILLY KING
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                        <div class="block-drops__item">
                            <div class="block-drops__row">
                                <img loading="lazy" src="./images/drops/spirit_freedom_1.png" alt="SPIRIT FREEDOM изображение спереди">
                                <button>
                                    <img loading="lazy" src="./images/icons/question.svg" alt="Иконка подсказки">
                                </button>
                                <img loading="lazy" src="./images/drops/spirit_freedom_2.png" alt="SPIRIT FREEDOM изображение сзади">
                            </div>
                            <div class="block-drops__texts">
                                <div class="block-drops__title">
                                    SPIRIT OF FREEDOM
                                </div>
                                <p class="block-drops__description">
                                    ФУТБОЛКА ИЗ 100% ХЛОПКА. СВОБОДНЫЙ,&nbsp;СЛЕГКА УКОРОЧЕННЫЙ СИЛУЭТ.
                                    ШЕЛКОГРАФИЧЕСКИЙ ПРИНТ СПЕРЕДИ И СЗАДИ.&nbsp;ДИСТРЕСС ПО ВСЕМУ ИЗДЕЛИЮ.
                                    КАЖДЫЙ ЭКЗЕМПЛЯР УНИКАЛЕН И ОБЛАДАЕТ ИНДИВИДУАЛЬНЫМ ХАРАКТЕРОМ.
                                </p>
                                <span class="block-drops__count">
                                    ВЫПУЩЕНО ЭКЗЕМПЛЯРОВ: 15
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="report2" class="report report_v2">
                    <div class="report__left">
                        <img loading="lazy" src="./images/report/v2/left_1.jpg" alt="Фотоотчет 1" class="report__left-first">
                        <img loading="lazy" src="./images/report/v2/left_2.jpg" alt="Фотоотчет 2" class="report__left-second">
                        <img loading="lazy" src="./images/report/v2/left_3.jpg" alt="Фотоотчет 3" class="report__left-third">
                    </div>
                    <div class="report__center">
                        <h2 class="report__title">
                            Фотоотчет
                        </h2>
                        <img loading="lazy" src="./images/report/v2/center_1.jpg" alt="Фотоотчет 4" class="report__center-first">
                        <img loading="lazy" src="./images/report/v2/center_2.jpg" alt="Фотоотчет 5" class="report__center-second">
                    </div>
                    <div class="report__right">
                        <img src="./images/report/v2/right_1.jpg" alt="Фотоотчет 6" class="report__right-first">
                        <img src="./images/report/v2/right_2.jpg" alt="Фотоотчет 7" class="report__right-second">
                        <img src="./images/report/v2/right_3.jpg" alt="Фотоотчет 8" class="report__right-third">
                    </div>
                </section>
                <section class="content-edition content-edition_v3" id="edition3">
                    <div class="title-h2">
                        <div class="title-h2__main">
                            <div class="title-h2__dash"></div>
                            <span class="title-h2__title">ИЗДАНИЕ 3</span>
                            <div class="title-h2__dash"></div>
                        </div>
                        <p class="title-h2__submain">
                            Скоро
                        </p>
                    </div>
                    <img src="./images/v3_placeholder.svg" alt="Контент появится в будущем" class="content-edition__placeholder">
                </section>`

        mainElement.innerHTML = dynamicLayout;
    }
})