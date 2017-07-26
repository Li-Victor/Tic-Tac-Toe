'use strict';

var game = {
    row1: [],
    row2: [],
    row3: []
};

var user;
var computer;

var spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];

var userTurn;

//O start first
//if user pick X, then computer starts first
function choose(piece) {
    user = piece;
    computer = piece === 'O' ? 'X' : 'O';
    userTurn = piece === 'O' ? true : false;
}

function reset() {
    game.row1 = [];
    game.row2 = [];
    game.row3 = [];
    spotsLeft = [0, 1, 2, 3, 4, 5, 6, 7, 8];
}

//if every row is set
function allSet() {
    if(rowSet(game.row1) && rowSet(game.row2) && rowSet(game.row3) && spotsLeft.length === 0) {
        return true;
    }

    return false;
}

function rowSet(row) {
    return row[0] != undefined && row[1] != undefined && row[2] != undefined;
}

//index is 0 - 2
//this would take out 0, 1, 2 in spotsLeft array
function chooseLocationRow1(index, piece) {
    if(game.row1[index] == undefined) {
        game.row1[index] = piece;

        spotsLeft.splice(spotsLeft.indexOf(index), 1);
    }
}

//index is 0 - 2
//this would take out 3, 4, 5 in spotsLeft array
function chooseLocationRow2(index, piece) {
    if(game.row2[index] == undefined) {
        game.row2[index] = piece;

        spotsLeft.splice(spotsLeft.indexOf(index + 3), 1);
    }
}

//index is 0 - 2
//this would take out 6, 7, 8 in spotsLeft array
function chooseLocationRow3(index, piece) {
    if(game.row3[index] == undefined) {
        game.row3[index] = piece;

        spotsLeft.splice(spotsLeft.indexOf(index + 6), 1);
    }
}

//computer chooses random spot
function computerChoose() {
    var rand = Math.floor(Math.random() * spotsLeft.length - 1);
    var position = spotsLeft[rand];
    if(position >= 0 && position < 3) chooseLocationRow1(position, computer);
    else if(position >= 3 && position < 6) chooseLocationRow2(position - 3, computer);
    else chooseLocationRow3(position - 6, computer);
}

function userChoose(position) {
    if(spotsLeft.indexOf(position) == -1) return false;

    if(position >= 0 && position < 3) chooseLocationRow1(position, user);
    else if(position >= 3 && position < 6) chooseLocationRow2(position - 3, user);
    else chooseLocationRow3(position - 6, user);
    return true;
}

function win() {
    //row win
    if(rowSet(game.row1) && game.row1[0] === game.row1[1] && game.row1[0] === game.row1[2] && game.row1[1] === game.row1[2]
        && game.row1[0] != undefined && game.row1[1] != undefined && game.row1[2] != undefined) return true;

    if(rowSet(game.row2) && game.row2[0] === game.row2[1] && game.row2[0] === game.row2[2] && game.row2[1] === game.row2[2]
        && game.row2[0] != undefined && game.row2[1] != undefined && game.row2[2] != undefined) return true;

    if(rowSet(game.row3) && game.row3[0] === game.row3[1] && game.row3[0] === game.row3[2] && game.row3[1] === game.row3[2]
        && game.row3[0] != undefined && game.row3[1] != undefined && game.row3[2] != undefined) return true;


    //column win
    if(game.row1[0] === game.row2[0] && game.row1[0] === game.row3[0] && game.row2[0] === game.row3[0]
        && game.row1[0] != undefined && game.row2[0] != undefined && game.row3[0] != undefined) return true;

    if(game.row1[1] === game.row2[1] && game.row1[1] === game.row3[1] && game.row2[1] === game.row3[1]
        && game.row1[1] != undefined && game.row2[1] != undefined && game.row3[1] != undefined) return true;

    if(game.row1[2] === game.row2[2] && game.row1[2] === game.row3[2] && game.row2[2] === game.row3[2]
        && game.row1[2] != undefined && game.row2[2] != undefined && game.row3[2] != undefined) return true;


    //diagonal win
    if(game.row1[0] === game.row2[1] && game.row1[0] === game.row3[2] && game.row2[1] === game.row3[2]
        && game.row1[0] != undefined && game.row2[1] != undefined && game.row3[2] != undefined) return true;

    if(game.row1[2] === game.row2[1] && game.row1[2] === game.row3[0] && game.row2[1] === game.row3[0]
        && game.row1[2] != undefined && game.row2[1] != undefined && game.row3[0] != undefined) return true;

    return false;
}

function whoWins() {
    if(win()) {
        if(userTurn) return 'You win!';
        return 'You lose!';
    }
}

function gameEnd() {
    return win() || allSet();
}
