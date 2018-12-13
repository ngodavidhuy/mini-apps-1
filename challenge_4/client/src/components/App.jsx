import Board from './Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      win: false,
      tie: false,
      piece: 'X',
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
          piece: 'O'
        }
      });
    } else {
      this.setState(prevState => {
        return {
          turn: 1,
          piece: 'X'
        }
      });
    }
  }

  handleMove(e) {
    let col = e.target.dataset.y;


    console.log(`${col}`);
    e.target.innerHTML = this.state.piece;
    this.changeTurn();
    // if ()
    // this.checkForWin();
    // this.checkForTie();
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

