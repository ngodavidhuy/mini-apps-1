import Input from './Input.js';
import Button from './Button.js';

const FormContainer1 = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'FORM 1'
    ),
    React.createElement(
      'form',
      null,
      React.createElement(Input, { type: 'text', title: 'Full Name', name: 'name', value: props.name, handleChange: props.handleChange, placeholder: 'Enter Name Here' }),
      React.createElement(Input, { type: 'email', title: 'Email', name: 'email', value: props.email, handleChange: props.handleChange, placeholder: 'Enter Email Here' }),
      React.createElement(Input, { type: 'password', title: 'Password', name: 'password', value: props.password, handleChange: props.handleChange, placeholder: 'Enter Password Here' })
    ),
    React.createElement(Button, { className: 'confirmButton', handleNext: props.handleNext, buttonName: 'next' })
  );
};

export default FormContainer1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIxLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIkZvcm1Db250YWluZXIxIiwicHJvcHMiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5leHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsWUFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5COztBQUVBLE1BQU1DLGlCQUFrQkMsS0FBRCxJQUFXO0FBQzlCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLFdBQTVCLEVBQXlDLE1BQU0sTUFBL0MsRUFBdUQsT0FBT0EsTUFBTUMsSUFBcEUsRUFBMEUsY0FBY0QsTUFBTUUsWUFBOUYsRUFBNEcsYUFBYSxpQkFBekgsR0FERjtBQUVFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE9BQWIsRUFBc0IsT0FBTyxPQUE3QixFQUFzQyxNQUFNLE9BQTVDLEVBQXFELE9BQU9GLE1BQU1HLEtBQWxFLEVBQXlFLGNBQWNILE1BQU1FLFlBQTdGLEVBQTJHLGFBQWEsa0JBQXhILEdBRkY7QUFHRSwwQkFBQyxLQUFELElBQU8sTUFBTSxVQUFiLEVBQXlCLE9BQU8sVUFBaEMsRUFBNEMsTUFBTSxVQUFsRCxFQUE4RCxPQUFPRixNQUFNSSxRQUEzRSxFQUFxRixjQUFjSixNQUFNRSxZQUF6RyxFQUF1SCxhQUFhLHFCQUFwSTtBQUhGLEtBRkY7QUFPRSx3QkFBQyxNQUFELElBQVEsV0FBVSxlQUFsQixFQUFrQyxZQUFZRixNQUFNSyxVQUFwRCxFQUFnRSxZQUFZLE1BQTVFO0FBUEYsR0FERjtBQVdILENBWkQ7O0FBY0EsZUFBZU4sY0FBZiIsImZpbGUiOiJGb3JtQ29udGFpbmVyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0LmpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uanMnO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyMSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Rk9STSAxPC9oMT5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydGdWxsIE5hbWUnfSBuYW1lPXsnbmFtZSd9IHZhbHVlPXtwcm9wcy5uYW1lfSBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9eydFbnRlciBOYW1lIEhlcmUnfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsnZW1haWwnfSB0aXRsZT17J0VtYWlsJ30gbmFtZT17J2VtYWlsJ30gdmFsdWU9e3Byb3BzLmVtYWlsfSBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9eydFbnRlciBFbWFpbCBIZXJlJ30gLz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3Bhc3N3b3JkJ30gdGl0bGU9eydQYXNzd29yZCd9IG5hbWU9eydwYXNzd29yZCd9IHZhbHVlPXtwcm9wcy5wYXNzd29yZH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPXsnRW50ZXIgUGFzc3dvcmQgSGVyZSd9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtQnV0dG9uXCIgaGFuZGxlTmV4dD17cHJvcHMuaGFuZGxlTmV4dH0gYnV0dG9uTmFtZT17J25leHQnfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRhaW5lcjE7Il19