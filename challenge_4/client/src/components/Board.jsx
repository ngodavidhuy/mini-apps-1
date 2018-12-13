import Square from './Square.jsx';

const Board = (props) => {

  // JAVASCRIPT HERE
  //props.rows === 6 AND props.cols === 7
  // for (let r = 0; r < props.rows; r++) {
  //   for (let c = 0; c < props.cols; c++) {

  //   }
  // }
  let spaces = [];

  for (let row = 0; row < props.board.length; row++) {
    let row = props.board[row].map((place, index) => {
      return (
        <Square x={row} y={index} handleMove={props.handleMove} />
      );
    });
    spaces.push(row);
  }

  // console.log(spaces);

  // let row1 = props.board[0].map( (place, index) => {
  //   return (
  //     <Square x={0} y={index} handleMove={props.handleMove} />
  //   );
  // });

  // props.board.map

  //HARDCODE TEST FIRST


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

// <Square x={0} y={0} handleMove={props.handleMove}/>
// <Square x={0} y={1} handleMove={props.handleMove}/>
// <Square x={0} y={2} handleMove={props.handleMove}/>
// <Square x={0} y={3} handleMove={props.handleMove}/>
// <Square x={0} y={4} handleMove={props.handleMove}/>
// <Square x={0} y={5} handleMove={props.handleMove}/>
// <Square x={0} y={6} handleMove={props.handleMove}/>


// <Square x={1} y={0} />
// <Square x={1} y={1} />
// <Square x={1} y={2} />
// <Square x={1} y={3} />
// <Square x={1} y={4} />
// <Square x={1} y={5} />
// <Square x={1} y={6} />


// <Square x={2} y={0} />
// <Square x={2} y={1} />
// <Square x={2} y={2} />
// <Square x={2} y={3} />
// <Square x={2} y={4} />
// <Square x={2} y={5} />
// <Square x={2} y={6} />

// <Square x={3} y={0} />
// <Square x={3} y={1} />
// <Square x={3} y={2} />
// <Square x={3} y={3} />
// <Square x={3} y={4} />
// <Square x={3} y={5} />
// <Square x={3} y={6} />

// <Square x={4} y={0} />
// <Square x={4} y={1} />
// <Square x={4} y={2} />
// <Square x={4} y={3} />
// <Square x={4} y={4} />
// <Square x={4} y={5} />
// <Square x={4} y={6} />

// <Square x={5} y={0} />
// <Square x={5} y={1} />
// <Square x={5} y={2} />
// <Square x={5} y={3} />
// <Square x={5} y={4} />
// <Square x={5} y={5} />
// <Square x={5} y={6} />