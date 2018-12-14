const Square = (props) => {
  let squareValue = props.board[props.x][props.y];
  let squareStatus;

  if (squareValue === 0) {
    squareStatus = 'row';
  } else if (squareValue === 1) {
    squareStatus = 'row Player1';
  } else if (squareValue === 2) {
    squareStatus = 'row Player2';
  }

  return (
      <div className={squareStatus} data-x={props.x} data-y={props.y} onClick={props.handleMove}></div>
  );
}

export default Square;