'use strict';

var checkBoxInput = document.querySelector('input');
var panelButton = document.querySelector('.panel__button');
var panel = document.querySelector('.panel');
var gameContainer = document.querySelector('.game__container');
var resetButton = document.querySelector('.new_game_reset');
var squares = document.querySelectorAll('.square');
var message = document.querySelector('.game__container__message');
var labelSwitch = document.querySelector('.switch div');

//play button
panelButton.addEventListener('click', function (event) {
    event.preventDefault();
    labelSwitch.classList.add('notransition');
    panel.classList.remove('do_display');
    panel.classList.add('dont_display');
    gameContainer.classList.remove('dont_display');
    gameContainer.classList.add('do_display');

    if (checkBoxInput.checked) {
        pick('X');
    } else {
        pick('O');
    }

    squares.forEach(function (square) {
        square.innerText = '';
    });
    message.innerText = '';

    controlPlayButton();
});

resetButton.addEventListener('click', function () {
    labelSwitch.classList.remove('notransition');
    panel.classList.remove('dont_display');
    panel.classList.add('do_display');
    gameContainer.classList.remove('do_display');
    gameContainer.classList.add('dont_display');

    controlResetButton();
});

squares.forEach(function (square) {
    square.addEventListener('click', function () {
        controlSquareButton(Number(this.dataset.key));
    });
});
