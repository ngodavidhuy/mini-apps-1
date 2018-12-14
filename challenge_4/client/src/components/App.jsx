import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: false,
      tie: false,
      player: 1,
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
      ]
    }

    this.checkForWin = this.checkForWin.bind(this);
    this.checkForTie = this.checkForTie.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  checkForWin(player, board) {
    let win = false;

    //VERTICAL
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
        if (board[r+3][c] === player && board[r+2][c] === player && 
          board[r+1][c] === player  && board[r][c] === player) {
          win = true;
        }
      }
    }

    //HORIZONTAL
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 6; r++) {
        if (board[r][c] === player && board[r][c+1] === player && 
          board[r][c+2] === player && board[r][c+3] === player) {
          win = true;
        }
      }
    }

    //LEFT-SIDE DIAGONALS
    for (let c = 3; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
        if (board[r][c] === player && board[r+1][c-1] === player && 
          board[r+2][c-2] === player && board[r+3][c-3] === player) {
          win = true;
        }
      }
    }

    //RIGHT DIAGONALS
    for (let c = 3; c < 7; c++) {
      for (let r = 3; r < 6; r++) {
        if (board[r][c] === player && board[r-1][c-1] === player && 
          board[r-2][c-2] === player && board[r-3][c-3] === player) {
          win = true;
        }
      }
    }

    return win;
  }

  checkForTie(board) {
    let spacesTakenCount = 0;

    for (let r = board.length - 1; r >= 0; r--) {
      for (let c = board[r].length - 1; c >= 0; c--) {
        if (board[r][c] !== 0) {
          spacesTakenCount++;
        }
      }
    }

    return spacesTakenCount === 42 ? true : false;
  }

  handleMove(evt) {
    let col = evt.target.dataset.y;
    let board = this.state.board.slice();
    let currentPlayer = this.state.player === 1 ? 1 : 2;
    let nextPlayer = currentPlayer === 1 ? 2 : 1;
    let spaceFound = false;
    let tie = this.state.tie;
    let win = this.state.win;

    for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][col] === 0 && !spaceFound) {
          board[r][col] = (this.state.player === 1 ? 1 : 2);
          win = this.checkForWin(currentPlayer, board);
          tie = this.checkForTie(board);
          spaceFound = true;
        }
    }

    this.setState({
      win,
      tie,
      player: nextPlayer,
      board
    });
  }

  render() {

    let prevPlayer = this.state.player === 1 ? 2 : 1;

    return (
      <div>
      <h1>Connect 4!</h1>
        <Board board={this.state.board} cols={7} rows={6} handleMove={this.handleMove} />
        <p>{this.state.win ? `Player ${prevPlayer} Win!` : `Player 1 : Red // Player 2 : Blue`}</p>
        <p>{this.state.tie ? `TIE GAME` : ``}</p>
      </div>
    );
  }
}

export default App;

