import Square from './Square.jsx';

const Board = (props) => {
  let spaces = [];

  for (let row = 0; row < props.board.length; row++) {
    let row = props.board[row].map((place, index) => {
      return (
        <Square board={props.board} x={row} y={index} handleMove={props.handleMove} />
      );
    });
    spaces.push(row);
  }

  return (
    <div className="board">
      {spaces[0]}
      {spaces[1]}
      {spaces[2]}
      {spaces[3]}
      {spaces[4]}
      {spaces[5]}
    </div>
  );
}

export default Board;

