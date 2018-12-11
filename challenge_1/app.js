let cells = document.querySelectorAll('td');
let resetButton = document.querySelector('button');
let gameStatus = document.getElementById('gameStatus');
let turn = document.querySelector('#turn');
let player1 = '"X"';
let player2= '"O"';
let player1Turn = true;

/////////////////////
// FUNCTIONS

function checkForWin (currentBoard, player) {

  let checkHorizontals = function() {
    let firstRow = (currentBoard[0] === player) && (currentBoard[0] === currentBoard[1] && currentBoard[0] === currentBoard[2]);
    let secondRow = (currentBoard[3] === player) && (currentBoard[3] === currentBoard[4] && currentBoard[3] === currentBoard[5]);
    let thirdRow = (currentBoard[6] === player) && (currentBoard[6]  === currentBoard[7] && currentBoard[6] === currentBoard[8]);

    return firstRow || secondRow || thirdRow;
  };

  let checkVerticals = function() {
    let firstCol = (currentBoard[0] === player) && (currentBoard[0] === currentBoard[3] && currentBoard[0] === currentBoard[6]);
    let secondCol = (currentBoard[1] === player) && (currentBoard[1] === currentBoard[4] && currentBoard[1] === currentBoard[7]);
    let thirdCol = (currentBoard[2] === player) && (currentBoard[2] === currentBoard[5] && currentBoard[2] === currentBoard[8]);

    return firstCol || secondCol || thirdCol;
  };

  let checkDiagonals = function() {
    let firstDiagonal = (currentBoard[0] === player) && (currentBoard[0] === currentBoard[4] && currentBoard[0] === currentBoard[8]);
    let secondDiagonal = (currentBoard[2] === player) && (currentBoard[2] === currentBoard[4] && currentBoard[2] === currentBoard[6]);

    return firstDiagonal || secondDiagonal;
  };
  
    return (checkHorizontals() || checkVerticals() || checkDiagonals());
}

function checkForTie(currentBoard) {
  let moves = currentBoard.reduce((count, cell) => {
    if (cell) {
      count += 1;
    }
    return count;
  }, 0);

  return moves === 9 ? true : false;
}

function removeCellEvtListeners() {
  for (let cell of cells) {
    cell.removeEventListener('click', playMove);
  }
}





/////////////////////
// EVENT LISTENERS

function playMove(evt) {
    
  if (!evt.target.innerHTML) {
    evt.target.innerHTML = player1Turn ? '"X"' : '"O"';
    player1Turn = !player1Turn;
  }

  let currentBoard = Array.prototype.slice.call(cells).map( cell => cell.innerHTML);

  if (checkForWin(currentBoard, player1) || checkForWin(currentBoard, player2)) {
    let winningPlayer = player1Turn ? 'PLAYER 2' : 'PLAYER 1'
    gameStatus.innerHTML = `"${winningPlayer} WINS"`;
    turn.innerHTML = '"END"';
    removeCellEvtListeners();
  } else if (checkForTie(currentBoard)) {
    gameStatus.innerHTML = `"TIE GAME"`
    turn.innerHTML = '"END"';
  } else {
    player1Turn ? turn.innerHTML = '"PLAYER 1\'S TURN"' : turn.innerHTML = '"PLAYER 2\'S TURN"'
  }

}

function addEvents() {
  for (let cell of cells) {
    cell.addEventListener('click', playMove);
  }
}

resetButton.addEventListener('click', () => {
  let cells = document.getElementsByTagName('td');
  for (let cell of cells) {
    cell.innerHTML = '';
  }

  gameStatus.innerHTML = '"ONGOING"';
  turn.innerHTML = '"PLAYER 1\'S TURN"';
  addEvents();
});


addEvents();