var player, winner = null;
var playerselect = document.getElementById('Jogador-selecionado')
var winnerselect = document.getElementById('Vencedor-selecionado')
var squares = document.getElementsByClassName('square')

changePlayer("X");

function selectSquare(id) {

    if (winner !== null) {
        return;
    }

    var square = document.getElementById(id);
    if (square.innerHTML !== "-"){
        return;
    }

    square.innerHTML = player;
    square.style.color ='#000';

    if (player ==='X'){
        player ="O"
    }else {
        player = 'X'
    }
    changePlayer(player);
    checkWinner();
}

function changePlayer(valor){
    player = valor;
    playerselect.innerHTML = player;
}

function checkWinner(){
    var square1 = document.getElementById("1");
    var square2 = document.getElementById("2");
    var square3 = document.getElementById("3");
    var square4 = document.getElementById("4");
    var square5 = document.getElementById("5");
    var square6 = document.getElementById("6");
    var square7 = document.getElementById("7");
    var square8 = document.getElementById("8");
    var square9 = document.getElementById("9");

    if (checkSequence(square1, square2, square3)){
        changeColorSquare(square1,square2,square3);
        changeWinner(square1)
        return;
    }
    if (checkSequence(square4, square5, square6)){
        changeColorSquare(square4,square5,square6);
        changeWinner(square4)
        return;
    }
    if (checkSequence(square7, square8, square9)){
        changeColorSquare(square7,square8,square9);
        changeWinner(square7)
        return;
    }
    if (checkSequence(square1, square4, square7)){
        changeColorSquare(square1,square4,square7);
        changeWinner(square1)
        return;
    }
    if (checkSequence(square2, square5, square8)){
        changeColorSquare(square2,square5,square8);
        changeWinner(square2)
        return;
    }
    if (checkSequence(square3, square6, square9)){
        changeColorSquare(square3,square6,square9);
        changeWinner(square3)
        return;
    }
    if (checkSequence(square1, square5, square9)){
        changeColorSquare(square1,square5,square9);
        changeWinner(square1)
        return;
    }
      if (checkSequence(square3, square5, square7)){
        changeColorSquare(square3,square5,square7);
        changeWinner(square3)
        
    }



}


function changeWinner(square) {
    winner = square.innerHTML;
    winnerselect.innerHTML = winner;
}

function changeColorSquare(square1, square2, square3) {
    square1.style.background = "linear-gradient(90deg,rgba(255,0,154,.94) 7.29%,#fe0001 18.22%,rgba(254,91,0,.97) 42.71%,#ff9a00 57.81%,rgba(255,0,154,.97) 73.82%,rgba(47,53,141,.97) 91.15%)";
    square2.style.background = "linear-gradient(90deg,rgba(255,0,154,.94) 7.29%,#fe0001 18.22%,rgba(254,91,0,.97) 42.71%,#ff9a00 57.81%,rgba(255,0,154,.97) 73.82%,rgba(47,53,141,.97) 91.15%)";
    square3.style.background = "linear-gradient(90deg,rgba(255,0,154,.94) 7.29%,#fe0001 18.22%,rgba(254,91,0,.97) 42.71%,#ff9a00 57.81%,rgba(255,0,154,.97) 73.82%,rgba(47,53,141,.97) 91.15%)";
}

function checkSequence(square1, square2, square3) {
    var isequal = false;

    if(square1.innerHTML !== "-" && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isequal = true;
    }
    return isequal;

}

function restart() {
    winner = null;
    winnerselect.innerHTML = '';

    for ( var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = "#eee";
        square.style.color ="#eee";
        square.innerHTML = '-';
    }

    changePlayer('X');
}