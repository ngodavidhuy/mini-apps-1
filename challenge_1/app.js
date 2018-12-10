let cells = document.querySelectorAll('td');
let playerTurn = true;

console.log(Array.prototype.slice.call(cells).map( cell => cell.innerHTML));

function checkForWin (cells) {
  // let arr = cells.map( cell => cell.target.textContent);
  // console.log(arr);
}

for (let cell of cells) {
  cell.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    console.log(evt.target.textContent);

    if (!evt.target.textContent) {
      evt.target.textContent = playerTurn ? 'X' : 'O';
      playerTurn = !playerTurn;
    }
  });
}

// checkForWin(cells);