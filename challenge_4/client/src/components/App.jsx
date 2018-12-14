import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: false,
      tie: false,
      turn: 1,
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

  checkForWin(player) {
    let board = this.state.board;
    let win = false;

    //VERTICAL
    for (let c = 0; c < 7; c++) {
      for (let r = 0; r < 3; r++) {
        if (board[r+3][c] === player && board[r+2][c] === player && board[r+1][c] === player  && board[r][c] === player) {
          win = true;
        }
      }
    }

    //HORIZONTAL
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 6; r++) {
        if (board[r][c] === player && board[r][c+1] === player && board[r][c+2] === player && board[r][c+3] === player) {
          win = true;
        }
      }
    }

    //MAJOR DIAGONAL

    //MINOR DIAGONAL


    console.log('check win');
    console.log(win);
  }

  checkForTie() {
    let board = this.state.board;
    let spacesTakenCount = 0;

    for (let r = board.length - 1; r >= 0; r--) {
      for (let c = board[r].length - 1; c >= 0; c--) {
        if (board[r][c] !== 0) {
          spacesTakenCount++;
        }
      }
    }

    if (spacesTakenCount === 42) {
      this.setState({
        tie: true
      }, () => {
        console.log('GAME IS A TIE');
        // console.log(this.state.tie);
      });
    } else {
      // console.log('GAME ON!')
    }
  }

  handleMove(evt) {
    let col = evt.target.dataset.y;
    let board = this.state.board.slice();
    let currentPlayer = this.state.turn === 1 ? 1 : 2;
    let nextPlayer = currentPlayer === 1 ? 2 : 1;
    let spaceFound = false;

    for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][col] === 0 && !spaceFound) {
          board[r][col] = (this.state.turn === 1 ? 1 : 2);
          this.setState({
            board: board,
            turn: nextPlayer
          }, () => {
            this.checkForWin(currentPlayer);
            this.checkForTie();
          });
          spaceFound = true;
        }
    }
  }

  render() {
    return (
      <div>
      <h1>Connect 4!</h1>
        <Board board={this.state.board} cols={7} rows={6} handleMove={this.handleMove} />
      </div>
    );
  }
}

export default App;

