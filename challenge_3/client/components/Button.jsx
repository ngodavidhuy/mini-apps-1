const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleNext}>{props.buttonName}</button>
    </div>
  );
}

export default Button;