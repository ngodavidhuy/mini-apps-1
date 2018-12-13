

const Input = props => {

  return React.createElement(
    "div",
    { className: "form-group" },
    React.createElement(
      "label",
      { htmlFor: props.name, className: "form-label" },
      props.title,
      " : "
    ),
    React.createElement("input", {
      className: "form-input",
      id: props.name,
      name: props.name,
      type: props.type,
      value: props.value,
      onChange: props.handleChange,
      placeholder: props.placeHolder
    })
  );
};

export default Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0lucHV0LmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwibmFtZSIsInRpdGxlIiwidHlwZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwicGxhY2VIb2xkZXIiXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTUEsUUFBU0MsS0FBRCxJQUFXOztBQUV2QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxRQUFPLFNBQVNBLE1BQU1DLElBQXRCLEVBQTRCLFdBQVUsWUFBdEM7QUFBb0RELFlBQU1FLEtBQTFEO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFDRSxpQkFBVSxZQURaO0FBRUUsVUFBSUYsTUFBTUMsSUFGWjtBQUdFLFlBQU1ELE1BQU1DLElBSGQ7QUFJRSxZQUFNRCxNQUFNRyxJQUpkO0FBS0UsYUFBT0gsTUFBTUksS0FMZjtBQU1FLGdCQUFVSixNQUFNSyxZQU5sQjtBQU9FLG1CQUFhTCxNQUFNTTtBQVByQjtBQUZGLEdBREY7QUFlRCxDQWpCRDs7QUFtQkEsZUFBZVAsS0FBZiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntwcm9wcy50aXRsZX0gOiA8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgaWQ9e3Byb3BzLm5hbWV9XG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlSG9sZGVyfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXX0=