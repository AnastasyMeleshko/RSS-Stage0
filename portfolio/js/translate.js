const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text-1-1': 'Save sincere emotions, romantic feelings and',
        'hero-text-1-2': 'happy moments of life together with professional',
        'hero-text-1-3': 'photographer Alexa Rise',
        'hero-text-2-1': 'Save sincere emotions, romantic feelings',
        'hero-text-2-2': 'and happy moments of life together with',
        'hero-text-2-3': 'professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1-1': 'High-quality photos in the studio',
        'skill-text-1-2': 'and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2-1': 'Capture your moments so that',
        'skill-text-2-2': 'they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3-1': 'I strive to make photography',
        'skill-text-3-2': 'surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4-1': 'Professional sounds recording',
        'skill-text-4-2': 'for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'standard' : 'Standard',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'premium' : 'Premium',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'gold' : 'Gold',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message',
        'e-mail' : 'E-mail',
        'phone' : 'Phone',
        'message' : 'Message'

    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text-1-1': 'Сохраните искренние эмоции, романтические переживания и',
        'hero-text-1-2': 'счастливые моменты жизни вместе с профессиональным',
        'hero-text-1-3': 'фотографом Алексой Райс',
        'hero-text-2-1': 'Сохраните искренние эмоции, романтические переживания',
        'hero-text-2-2': 'и счастливые моменты жизни вместе с',
        'hero-text-2-3': 'профессиональным фотографом Алексой Райс',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1-1': 'Высококачественные фото в студии',
        'skill-text-1-2': 'и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2-1': 'Запечатлите лучшие моменты, чтобы',
        'skill-text-2-2': 'они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3-1': 'Я стремлюсь к тому, чтобы фотография',
        'skill-text-3-2': 'превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4-1': 'Профессиональная запись звука',
        'skill-text-4-2': 'для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'standard' : 'Стандарт',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'premium' : 'Премиум',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'gold' : 'Золотой',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить',
        'e-mail' : 'Ваша почта',
        'phone' : 'Телефон',
        'message' : 'Сообщение'
    }
}

const enButton = document.querySelector(".switch-en-lng");
const ruButton = document.querySelector(".switch-ru-lng");

function switchLanguage(event) {
    let language = event.target.dataset.language;
    getTranslate(language);

    function setLocalStorage() {
        localStorage.setItem('lang', language);
    }
    window.addEventListener('beforeunload', setLocalStorage);

}

function getTranslate(language) {
    const allElementWithLang = document.querySelectorAll("[data-translate]");
    allElementWithLang.forEach(changeLang);

    function changeLang(currentElement) {

    let itemData = currentElement.dataset.translate;
    let ObjKeys = Object.keys(i18Obj[language]);

    for (let key of ObjKeys) {
        if (itemData === key) {
            currentElement.textContent = i18Obj[language][itemData];

            if (currentElement.placeholder) {
                currentElement.placeholder = i18Obj[language][itemData];
            }
        }
    }
}
}

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        let lang = localStorage.getItem('lang');

        let event = new Event('click');

        if (lang === "ru") {
            ruButton.dispatchEvent(event)
        }
        if (lang === "en") {
            enButton.dispatchEvent(event)
        }
    }
}
window.addEventListener('load', getLocalStorage);


enButton.addEventListener("click", switchLanguage);
ruButton.addEventListener("click", switchLanguage);

const allLanguageButtons = document.querySelectorAll("[data-language]");

function changeActiveColor(event) {
    const allLanguageButtons = document.querySelectorAll("[data-language]");
    allLanguageButtons.forEach(button => button.classList.remove("active-color"));

    if (event.target.classList.contains('switch-lang')) {
        if (!event.target.classList.contains('active-color')) {
            event.target.classList.add("active-color");
        }

        if (ruButton.classList.contains("active-color")) {
            const allSkillsItems = document.querySelectorAll(".skills-item");
            allSkillsItems.forEach(element => (element.classList.add("ru-language")));
            let skillsItemsGroupFirst = document.querySelector(".skills-item-group");
            skillsItemsGroupFirst.style.marginRight = "0";


            window.addEventListener("resize", function() {
                let screenWidth = innerWidth;
                let SkillsItems = document.querySelectorAll(".skills-items");
                let skillsItemsGroupFirst = document.querySelector(".skills-item-group");
                let skillsItemDigital = document.querySelector(".skills-item-digital");
                let skillsItemRetoush = document.querySelector(".skills-item-retouch");
                let skillsItemVideo = document.querySelector(".video-item");
                let skillsItemAudio = document.querySelector(".skills-item-audio");
                let portfolioContainer = document.querySelector(".portfolio-container");
                let skillsItemsWrap = document.querySelector(".skills-items");
                let priceItems = document.querySelectorAll(".price-item");

                if ((screenWidth < 1460) && (screenWidth > 771)){
                    skillsItemsGroupFirst.style.paddingLeft = "39px";
                    skillsItemDigital.style.marginRight = "20px";
                    skillsItemRetoush.style.marginRight = "20px";
                    portfolioContainer.style.paddingTop = "50px";
                }

                if ((screenWidth <= 770) && (screenWidth > 767)) {
                    SkillsItems.forEach(element => (element.style.padding = "0 0 48px 0"));
                    skillsItemVideo.style.padding = "0 42px 54px 28px";
                    skillsItemDigital.style.padding = "0 8px 54px 4px";
                    skillsItemAudio.style.padding = "0 18px 0 7px";
                    skillsItemRetoush.style.padding = "0";
                    skillsItemsWrap.style.paddingBottom = "92px";
                    priceItems.forEach(element => (element.style.paddingLeft = "0"));
                    priceItems.forEach(element => (element.style.paddingRight = "0"));
                }

                if (screenWidth < 767) {
                    skillsItemsGroupFirst.style.paddingLeft = "0";
                    SkillsItems.forEach(element => (element.style.marginRight = "0"));
                }

                if (screenWidth < 340) {
                    portfolioContainer.style.paddingTop = "0";
                }
            });

        }
    }
}

allLanguageButtons.forEach(button => button.addEventListener("click", changeActiveColor));


