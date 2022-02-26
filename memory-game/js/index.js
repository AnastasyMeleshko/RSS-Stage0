console.log("Оценка по итогам самопроверки: 70");
console.log("Вёрстка +10\n" +
    "реализован интерфейс игры +5\n" +
    "в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" +
    "Логика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10\n" +
    "Игра завершается, когда открыты все карточки +10\n" +
    "По окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10\n" +
    "Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10\n" +
    "По клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переварачиваются рубашкой вверх +10\n" +
    "Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n" +
    "высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо")

let soundsOn = true;

const preview = document.createElement("div");
preview.classList.add("game-preview");
preview.innerHTML = `
    <p>Hello, friend!</p>
    <p>Before starting the game</p>
    <p>please enter your name:</p>
    <form action="#">
    <input class="name-input" type="text" id="name" name="name" autocomplete="off" autofocus placeholder="Your name" required>
    <div class="btn-wrap">
    <button class="btn-play" type="button">Play</button>
    <button class="btn-records" type="button">Records table</button>
    </div>
    </form>`;
document.body.append(preview);

const btnPlay = document.getElementsByClassName("btn-play");
const nameInput = document.getElementsByClassName("name-input");
const gameStart = document.getElementsByClassName("game-start");
const objOfResults = {};
const objOfAllResults = {};

const soundsBtn = document.querySelector(".sounds");

soundsBtn.onclick = function() {
    if (soundsBtn.innerHTML === "Sounds: turn on") {
        soundsBtn.innerHTML = "Sounds: turn off";
        soundsOn = false;
    } else {
        soundsBtn.innerHTML = "Sounds: turn on";
        soundsOn = true;
    }

    if (soundsOn === false) {
        myAudio.pause();
    } else {
        playMusic();
    }
}

function playMusic() {
    if (soundsOn === true) {
        myAudio.play();
    }
}

myAudio = new Audio("./assets/sounds/backgroung-music.mp3");
if (typeof myAudio.loop === 'boolean') {
    myAudio.loop = true;
}
else {
    myAudio.addEventListener('ended', function() {
        if (soundsOn === true) {
            this.currentTime = 0;
            this.play();
        }
    }, false);
}

function startGame() {
    let playerName = nameInput[0].value;

    if (playerName) {
        preview.style.display = "none";
        gameStart[0].classList.remove("hide-game");
        document.getElementsByTagName("h1")[0].innerHTML = `${playerName}!`;
    }

}

nameInput[0].addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        startGame();
    }
});
btnPlay[0].addEventListener("click", startGame);

const cards = document.querySelectorAll('.memory-card');
const step = document.querySelector(".step");
let moves = 0;
let numberOfMoves;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    moves++;
    step.innerHTML = `Number of moves: ${moves}`;
    secondCard = this;
    checkForMatch();

    numberOfMoves = parseInt(step.innerHTML.replace(/[^\d]/g, ''));

    const flippedCards = document.querySelectorAll(".flip");
    if ((flippedCards.length === 12) && (soundsOn === true)) {
        document.querySelector('.audio-win').play();
    }

    if (flippedCards.length === 12)  {
        showResults();
    }

}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    const flippedCards = document.querySelectorAll(".flip");
    if ((flippedCards.length === 12) && (soundsOn === true)) {
        document.querySelector('.audio-win').play();
    }
    if (((isMatch) && (flippedCards.length !== 12)) && (soundsOn === true)) {
        document.querySelector('.audio-match').play();
    }

    if (((!isMatch) && (flippedCards.length !== 12)) && (soundsOn === true)){
        document.querySelector('.audio-not-match').play();
    }

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = `${randomPos}`;
    });
})();


function showResults() {
    setTimeout(() => {
        let playerName = nameInput[0].value;
        gameStart[0].style.opacity = "0.3";
        preview.innerHTML = "";
        preview.innerHTML = `
            <p>${playerName}!</p>
            <p>Your have found all pairs after</p>
            <p>${numberOfMoves} moves!</p>
            <button class="second-btn-records" type="button">Records table</button>
            <button class="btn-play play-again" type="button">Play again</button>
        `;
        const btnRecords2 = document.querySelector(".second-btn-records");
        btnRecords2.addEventListener("click", showRecordsTable);
        const playagain = document.querySelector(".play-again");
        playagain.addEventListener("click", playAgain);
        preview.style.display = "flex";

        storageResults(playerName);
    }, 600);
}

function storageResults(playerName) {
    if (localStorage.getItem("Best results") === null)  {
        objOfResults[playerName] = `${numberOfMoves}`;
        let addInfo = JSON.stringify(objOfResults);
        localStorage.setItem(`Best results`, addInfo);
    } else {
        let objOfResultsUpd = JSON.parse(localStorage.getItem("Best results"));
        objOfResultsUpd[playerName] = `${numberOfMoves}`;

        let sortable = [];
        for (let key in objOfResultsUpd) {
            sortable.push([key, objOfResultsUpd[key]]);
        }
        let arr = sortable.sort(function(a, b) {
            return a[1] - b[1];
        });
        let newArr = [...arr].slice(0,10);
        let objSorted = {};
        newArr.forEach(function(item){
            objSorted[item[0]]=item[1];
        });

        let addInfo = JSON.stringify(objSorted);
        localStorage.setItem(`Best results`, addInfo);
    }

    if (localStorage.getItem("Last 10 games results") === null)  {
        objOfAllResults[playerName] = `${numberOfMoves}`;
        let addInfo = JSON.stringify(objOfAllResults);
        localStorage.setItem("Last 10 games results", addInfo);
    } else {
        let objOfResultsUpd2 = JSON.parse(localStorage.getItem("Last 10 games results"));
        objOfResultsUpd2[playerName] = `${numberOfMoves}`;

        let arr = [];
        for (let key in objOfResultsUpd2) {
            arr.push([key, objOfResultsUpd2[key]]);
        }
        let newArr = [...arr].slice(-10);
        let objWithLastResults = {};
        newArr.forEach(function(item){
            objWithLastResults[item[0]]=item[1];
        });

        let addInfo = JSON.stringify(objWithLastResults);
        localStorage.setItem("Last 10 games results", addInfo);
    }

}

cards.forEach(card => card.addEventListener('click', flipCard));

const btnRecords = document.querySelector(".btn-records");

function showRecordsTable() {
    let allRecords = JSON.parse(localStorage.getItem("Best results"));
    console.log(allRecords)
    preview.innerHTML = "";

    if (!allRecords) {
        preview.innerHTML = `
         <span class="inform-text">There are no records as of now</span>
         <button class="btn-return" type="button">Play</button>
        `;
        const btnBack = document.querySelector(".btn-return");
        btnBack.addEventListener("click", playAgain);
    } else {
        let num = 1;
        preview.innerHTML = `
            <p class="top-ten">Top 10 players</p>
           <table class="winners">
           <tbody class="table-body">
           <tr><th>Place</th><th>Player name</th><th>Number of moves</th></tr>
           </tbody>
           </table>
`;

        for (let key in allRecords) {
            const bodyOfTable = document.querySelector(".table-body");
            let row_2 = document.createElement('tr');
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML = `${num}`;
            row_2.append(row_2_data_1);
            let row_2_data_2 = document.createElement('td');
            row_2_data_2.innerHTML = `${key}`;
            row_2.append(row_2_data_2);
            let row_2_data_3 = document.createElement('td');
            row_2_data_3.innerHTML = `${allRecords[key]}`;
            row_2.append(row_2_data_3);
            bodyOfTable.append(row_2);
            num++;
        }

        preview.innerHTML += `
    <button class="btn-return" type="button">Let's play</button>
    `;

        const btnBack = document.querySelector(".btn-return");
        btnBack.addEventListener("click", playAgain);
    }
}

function playAgain() {
    document.location.reload(true);
}

window.onload = function() {
    let event = new Event("click");
    document.body.dispatchEvent(event);
};

btnRecords.addEventListener("click", showRecordsTable);

