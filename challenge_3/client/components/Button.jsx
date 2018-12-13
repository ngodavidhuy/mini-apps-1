const Button = (props) => {
  return (
    <div>
      <button className={props.className} onClick={props.handleSubmit || props.handleNext} type={props.type}>{props.buttonName}</button>
    </div>
  );
}

export default Button;