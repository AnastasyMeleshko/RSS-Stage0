console.log("Самооценка js30 #1.1 eco-sounds: 70 баллов");
console.log("Вёрстка +10\n" +
    "есть не меньше пяти интерактивных элементов, с которыми пользователи могут взаимодействовать. Изменение внешнего вида самого элемента и состояния курсора при наведении, плавные анимации +5\n" +
    "в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" +
    "При кликах по интерактивным элементам меняется изображение +10\n" +
    "При кликах по интерактивным элементам меняется звук +10\n" +
    "Активный в данный момент интерактивный элемент выделяется стилем +10\n" +
    "Кнопка Play/Pause +20\n" +
    "есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10\n" +
    "внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10\n" +
    "Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n" +
    "высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо")

const birds = ['nightingale', 'thrush', 'robin', 'lark', 'warbler'];

function preloadImages() {
    for (let i =0; i< birds.length; i++) {
            const img = new Image();
            if (birds[i] === "nightingale") {
                img.src = `../assets/img/1.jpg`;
            }
            if (birds[i] === "thrush") {
                img.src = `../assets/img/2.jpg`;
            }
            if (birds[i] === "robin") {
                img.src = `../assets/img/3.jpg`;
            }
            if (birds[i] === "lark") {
                img.src = `../assets/img/4.jpg`;
            }
            if (birds[i] === "warbler") {
                img.src = `../assets/img/5.jpg`;
            }
    }
}

preloadImages();

const mainSection = document.querySelector(".main");
const activeButtons = document.querySelectorAll(".list-item, .header-logo");
const classesBg = ["nightingale-bg", "thrush-bg", "robin-bg", "lark-bg", "warbler-bg", "forest-bg"];
const flyingBirds = document.querySelectorAll(".bird");


function createContentOfBlock(text) {
    const infoBlock = document.createElement("div");
    infoBlock.classList.add("info-block");
    const infoText = document.createElement("p");
    infoText.classList.add("info-text");
    const infoTextInside  = document.createTextNode(`${text}`);
    infoText.appendChild(infoTextInside);
    infoBlock.append(infoText);
    return infoBlock;
}

function createContentImage() {
    const infoImage = document.createElement("div");
    infoImage.classList.add("info-image");
    infoImage.classList.add("info-image-bg");
    return infoImage;
}

let nightingaleImg = createContentImage();
let thrushImg = createContentImage();
let robinImg = createContentImage();
let larkImg = createContentImage();
let warblerImg = createContentImage();

let forestText = "В настоящее время на нашей планете проживает более десяти с половиной тысяч различных видов птиц. " + "Они есть даже в самых труднодоступных областях Антарктиды. " + "До сих пор точно не известно, от какого вида живых существ произошли птицы. Одна из самых популярных теорий гласит, что от динозавров.";
let infoForestBlock = createContentOfBlock(forestText);
let nightingaleText = "Соловьи, соловьиные (лат. Luscinia) — род птиц из отряда воробьинообразных. " + "Наиболее известен обыкновенный соловей (Luscinia luscinia) — птица с длиной тела около 17 см, имеющая длинные ноги, большие темные глаза, буроватое оперение и рыжеватый хвост."
    + " Питается пауками, насекомыми, червями, ягодами. " + "Пение звучное.";
let infoNightingaleBlock = createContentOfBlock(nightingaleText);
let thrushText = "Дрозды (лат. Turdus), — род воробьиных птиц из семейства дроздовых (Turdidae). Длина тела 20—25 см. По земле передвигаются прыжками, приседая при этом. " + " Распространены в Европе, Азии и Америке; завезены в Новую Зеландию." +
" Питаются насекомыми, пауками, червями, моллюсками, ягодами, часто кормятся на земле. " + "Чёрный (Turdus merula) и певчий (Turdus philomelos) дрозды  — прекрасные певцы.";
let infoThrushBlock = createContentOfBlock(thrushText);
let robinText = "Заря́нка (лат. Erithacus rubecula) — птица из семейства мухоловковых (Muscicapidae). Согласно энциклопедическому словарю Брокгауза и Ефрона в XIX веке использовались также названия малиновка, зорька, зорянка и ольшанка. " +
" Взрослые зарянки имеет длину 12,5-14,0 см, вес 16-22 г. " + "Поют оба пола (один из редких случаев среди певчих птиц), но самки имеют менее разнообразный набор нот.";
let infoRobinBlock = createContentOfBlock(robinText);
let larkText = "Полевой жа́воронок (лат. Alauda arvensis), — вид воробьиных птиц из семейства жаворонковых (Alaudidae). Птица размером немного крупнее воробья и имеет неяркую, но привлекательную окраску оперения. Эти маленькие птички известны довольно громким и мелодичным пением." +
" Самца можно отличить от самки по более крупным размерам и по песне, которая отсутствует у самки.";
let infoLarkBlock = createContentOfBlock(larkText);
let warblerText = "Сла́вки (лат. Sylvia) — род птиц из семейства славковых (Sylviidae). Славки являются одним из более крупных родов внутри своего семейства, поэтому и дали ему его название. Птицы живут в лесах и густых кустарниках, однако некоторые виды приживаются и в садах. Их пение часто громкое и специфическое и по нему их можно легко отличить от других птиц.";
let infoWarblerBlock = createContentOfBlock(warblerText);

function changeImage(event) {
    if ((event.target.closest('.list-item')) || (event.target.closest('.header-logo')))  {

        for (let i=0; i<classesBg.length; i++) {
            if (event.target.dataset.bird === "nightingale") {
                if (i === 0) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }
            }

            if (event.target.dataset.bird === "thrush") {
                if (i === 1) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }

            }

            if (event.target.dataset.bird === "robin") {
                if (i === 2) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }
            }

            if (event.target.dataset.bird === "lark") {
                if (i === 3) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }
            }

            if (event.target.dataset.bird === "warbler") {
                if (i === 4) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }
            }

            if (event.target.dataset.bird === "initial") {
                if (i === 5) {
                    mainSection.classList.add(classesBg[i]);
                } else {
                    mainSection.classList.remove(classesBg[i]);
                }
            }

        }

    }
}

function changeColor(event) {
    if ((event.target.closest('.list-item')) || (event.target.closest('.header-logo')))  {
          activeButtons.forEach((btn) => {
              if ((!btn.classList.contains("active")) && (event.target === btn)) {
                  btn.classList.add("active");
              } else {
                  btn.classList.remove("active");
              }
          })
    }
}

const playButton = document.querySelector(".play-btn");
let isPlay = false;

const audio = new Audio();

function playAudio(src) {
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function togglePlayBtn() {
    playButton.classList.toggle("pause");
}

function playByClick() {

    if (isPlay === false) {
        playButton.classList.add("pause");
    }

    let indexActive = 0;

    for (let i=0; i<activeButtons.length; i++) {
        if (activeButtons[i].classList.contains("active")) {
            indexActive = i;
        }
    }

    if (indexActive === 0) {
        playAudio("./assets/audio/forest.mp3");
        isPlay = true;
        flyingBirds.forEach((bird) => {
            bird.classList.add("flying-bird");
        })
        infoForestBlock.classList.add("shown");
        mainSection.append(infoForestBlock);
    } else {
        flyingBirds.forEach((bird) => {
            bird.classList.remove("flying-bird");
        })
        infoForestBlock.classList.remove("shown");
    }

    if (indexActive === 1) {
        playAudio("./assets/audio/nightingale.mp3");
        isPlay = true;
        infoNightingaleBlock.classList.add("shown");
        mainSection.append(infoNightingaleBlock);
        nightingaleImg.classList.add("shown");
        nightingaleImg.classList.add("info-image-bg-bird-1");
        mainSection.append(nightingaleImg);
    } else {
        infoNightingaleBlock.classList.remove("shown");
        nightingaleImg.classList.remove("shown");
    }

    if (indexActive === 2) {
        playAudio("./assets/audio/thrush.mp3");
        isPlay = true;
        infoThrushBlock.classList.add("shown");
        mainSection.append(infoThrushBlock);
        thrushImg.classList.add("shown");
        thrushImg.classList.add("info-image-bg-bird-2");
        mainSection.append(thrushImg);
    } else {
        infoThrushBlock.classList.remove("shown");
        thrushImg.classList.remove("shown");
    }

    if (indexActive === 3) {
        playAudio("./assets/audio/robin.mp3");
        isPlay = true;
        infoRobinBlock.classList.add("shown");
        mainSection.append(infoRobinBlock);
        robinImg.classList.add("shown");
        robinImg.classList.add("info-image-bg-bird-3");
        mainSection.append(robinImg);
    } else {
        infoRobinBlock.classList.remove("shown");
        robinImg.classList.remove("shown");
    }

    if (indexActive === 4) {
        playAudio("./assets/audio/lark.mp3");
        isPlay = true;
        infoLarkBlock.classList.add("shown");
        mainSection.append(infoLarkBlock);
        larkImg.classList.add("shown");
        larkImg.classList.add("info-image-bg-bird-4");
        mainSection.append(larkImg);
    } else {
        infoLarkBlock.classList.remove("shown");
        larkImg.classList.remove("shown");
    }

    if (indexActive === 5) {
        playAudio("./assets/audio/warbler.mp3");
        isPlay = true;
        infoWarblerBlock.classList.add("shown");
        mainSection.append(infoWarblerBlock);
        warblerImg.classList.add("shown");
        warblerImg.classList.add("info-image-bg-bird-5");
        mainSection.append(warblerImg);
    } else {
        infoWarblerBlock.classList.remove("shown");
        warblerImg.classList.remove("shown");
    }

    if (!playButton.classList.contains("pause")) {
        pauseAudio();
        isPlay = false;
        flyingBirds.forEach((bird) => {
            bird.classList.remove("flying-bird");
        })
        infoForestBlock.classList.remove("shown");
        infoNightingaleBlock.classList.remove("shown");
        infoThrushBlock.classList.remove("shown");
        infoRobinBlock.classList.remove("shown");
        infoLarkBlock.classList.remove("shown");
        infoWarblerBlock.classList.remove("shown");
        nightingaleImg.classList.remove("shown");
        thrushImg.classList.remove("shown");
        robinImg.classList.remove("shown");
        larkImg.classList.remove("shown");
        warblerImg.classList.remove("shown");
    }
}

playButton.addEventListener("click", togglePlayBtn);
playButton.addEventListener("click", playByClick);

activeButtons.forEach((btn) => {
    btn.addEventListener("click", changeColor);
    btn.addEventListener("click", changeImage);
    btn.addEventListener("click", playByClick);
})



