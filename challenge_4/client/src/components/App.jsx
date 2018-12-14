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
    this.changeTurn = this.changeTurn.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  checkForWin() {

  }

  checkForTie() {

  }

  changeTurn() {
    if (this.state.turn === 1) {
      this.setState(prevState => {
        return {
          turn: 2,
        }
      });
    } else {
      this.setState(prevState => {
        return {
          turn: 1,
        }
      });
    }
  }

  handleMove(evt) {
    let col = evt.target.dataset.y;
    let board = this.state.board.slice();
    let spaceFound = false;

    for (let r = board.length - 1; r >= 0; r--) {
        if (board[r][col] === 0 && !spaceFound) {
          board[r][col] = (this.state.turn === 1 ? 1 : 2);
          this.setState({
            board
          }, () => {
            this.changeTurn();
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

