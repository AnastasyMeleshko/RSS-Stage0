console.log("Самооценка: 70 баллов");
console.log("Вёрстка +10\n" +
    "на странице есть несколько фото и строка поиска +5\n" +
    "в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" +
    "При загрузке приложения на странице отображаются полученные от API изображения +10\n" +
    "Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API +10\n" +
    "Поиск +30\n" +
    "при открытии приложения курсор находится в поле ввода +5\n" +
    "есть placeholder +5\n" +
    "автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5\n" +
    "поисковый запрос можно отправить нажатием клавиши Enter +5\n" +
    "после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5\n" +
    "в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5\n" +
    "Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n" +
    "высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо");

const searchInput = document.getElementById("input");

const finalUrl = `https://api.unsplash.com/search/photos?query=summer&per_page=30&orientation=landscape&client_id=3TzqFrHbgLMlGAuPx78263BsaTL3uENlkWjqMqvarDU`

const images = document.getElementById("grid");
const searchIcon = document.getElementById("search");
const cameraImage = document.querySelector(".fa-camera");
const imagesShown = 30;

function createImg(src) {
    const img = document.createElement('div');
    img.classList.add('img');
    img.classList.add('img-bg');
    img.style.backgroundImage = `url('${src}')`;
    return img;
}

function insertImg(elem) {
    if (images.children.length < imagesShown) {
        images.append(elem);
    }
}

function getData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                    data.results.forEach((item) => {
                        let newImage = createImg(item.urls.regular);
                        insertImg(newImage);
                    })
            }).catch((err) => {
            console.log("Fetch Error :", err);
        });
}

getData(finalUrl);

function searchImage() {
    let searchRequest = searchInput.value;
    searchRequest = searchRequest.replace(" ", "");
    searchRequest = searchRequest.toLowerCase();
    if (searchRequest) {
        images.innerHTML = "";
        let newUrl = `https://api.unsplash.com/search/photos?query=${searchRequest}&per_page=30&orientation=landscape&client_id=3TzqFrHbgLMlGAuPx78263BsaTL3uENlkWjqMqvarDU`
        getData(newUrl);
    }
}

cameraImage.addEventListener("click", () => {
    location.reload();
});
searchInput.addEventListener("change", searchImage);
searchIcon.addEventListener("click", searchImage);

const moveDown = document.querySelector(".move-down");
const moveUp = document.querySelector(".move-up");

moveDown.onclick = function() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

moveUp.onclick = function() {
    window.scrollTo(0, 0);
}
