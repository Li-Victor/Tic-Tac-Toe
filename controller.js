'use strict';

var gameFinished = false;

function controlSquareButton(key) {
    if(gameFinished) return;

    if(userChoose(key)) {
        userTurn = true;

        var userSquare = document.querySelector('[data-key="'+ key + '"]');
        userSquare.innerText = user;

        checkGame();

        if(!gameFinished) {
            userTurn = false;
            var computerPosition = computerChoose();
            var computerSquare = document.querySelector('[data-key="'+ computerPosition + '"]');
            computerSquare.innerText = computer;
        }

        checkGame();

    }
}

function checkGame() {
    if(gameEnd()) {
        var message = document.querySelector('.game__container__message');
        message.innerText = whoWins();
        reset();
        gameFinished = true;
    }

}

function controlResetButton() {
    reset();
    gameFinished = false;
}

//O starts first
function controlPlayButton() {
    if(user === 'O') return;

    var computerPosition = computerChoose();
    var computerSquare = document.querySelector('[data-key="'+ computerPosition + '"]');
    computerSquare.innerText = computer;
}

function pick(value) {
    choose(value);
}
