

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
      onChange: props.handleChange
      // placeholder={props.placeHolder}
    })
  );
};

export default Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0lucHV0LmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsInByb3BzIiwibmFtZSIsInRpdGxlIiwidHlwZSIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU1BLFFBQVNDLEtBQUQsSUFBVzs7QUFFdkIsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsUUFBTyxTQUFTQSxNQUFNQyxJQUF0QixFQUE0QixXQUFVLFlBQXRDO0FBQW9ERCxZQUFNRSxLQUExRDtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQ0UsaUJBQVUsWUFEWjtBQUVFLFVBQUlGLE1BQU1DLElBRlo7QUFHRSxZQUFNRCxNQUFNQyxJQUhkO0FBSUUsWUFBTUQsTUFBTUcsSUFKZDtBQUtFLGFBQU9ILE1BQU1JLEtBTGY7QUFNRSxnQkFBVUosTUFBTUs7QUFDaEI7QUFQRjtBQUZGLEdBREY7QUFlRCxDQWpCRDs7QUFtQkEsZUFBZU4sS0FBZiIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCBJbnB1dCA9IChwcm9wcykgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0gY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPntwcm9wcy50aXRsZX0gOiA8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCJcbiAgICAgICAgaWQ9e3Byb3BzLm5hbWV9XG4gICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XG4gICAgICAgIHR5cGU9e3Byb3BzLnR5cGV9XG4gICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLy8gcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlSG9sZGVyfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXX0=