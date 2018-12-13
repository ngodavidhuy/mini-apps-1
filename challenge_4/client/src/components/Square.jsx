const Square = (props) => {
  return (
    <div className="row" data-x={props.x} data-y={props.y} onClick={props.handleMove}></div>
  );
}

export default Square;