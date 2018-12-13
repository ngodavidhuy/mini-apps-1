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
      React.createElement(Input, { type: 'text', title: 'Email', name: 'email', value: props.email, handleChange: props.handleChange, placeholder: 'Enter Email Here' }),
      React.createElement(Input, { type: 'password', title: 'Password', name: 'password', value: props.password, handleChange: props.handleChange, placeholder: 'Enter Password Here' })
    ),
    React.createElement(Button, { className: 'nextButton', handleNext: props.handleNext, buttonName: 'next', type: 'button' })
  );
};

export default FormContainer1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIxLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIkZvcm1Db250YWluZXIxIiwicHJvcHMiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZU5leHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsWUFBbEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGFBQW5COztBQUVBLE1BQU1DLGlCQUFrQkMsS0FBRCxJQUFXO0FBQzlCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0UsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLFdBQTVCLEVBQXlDLE1BQU0sTUFBL0MsRUFBdUQsT0FBT0EsTUFBTUMsSUFBcEUsRUFBMEUsY0FBY0QsTUFBTUUsWUFBOUYsRUFBNEcsYUFBYSxpQkFBekgsR0FERjtBQUVFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxPQUE1QixFQUFxQyxNQUFNLE9BQTNDLEVBQW9ELE9BQU9GLE1BQU1HLEtBQWpFLEVBQXdFLGNBQWNILE1BQU1FLFlBQTVGLEVBQTBHLGFBQWEsa0JBQXZILEdBRkY7QUFHRSwwQkFBQyxLQUFELElBQU8sTUFBTSxVQUFiLEVBQXlCLE9BQU8sVUFBaEMsRUFBNEMsTUFBTSxVQUFsRCxFQUE4RCxPQUFPRixNQUFNSSxRQUEzRSxFQUFxRixjQUFjSixNQUFNRSxZQUF6RyxFQUF1SCxhQUFhLHFCQUFwSTtBQUhGLEtBRkY7QUFPRSx3QkFBQyxNQUFELElBQVEsV0FBVyxZQUFuQixFQUFpQyxZQUFZRixNQUFNSyxVQUFuRCxFQUErRCxZQUFZLE1BQTNFLEVBQW1GLE1BQU0sUUFBekY7QUFQRixHQURGO0FBV0gsQ0FaRDs7QUFjQSxlQUFlTixjQUFmIiwiZmlsZSI6IkZvcm1Db250YWluZXIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5qcyc7XG5cbmNvbnN0IEZvcm1Db250YWluZXIxID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5GT1JNIDE8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3RleHQnfSB0aXRsZT17J0Z1bGwgTmFtZSd9IG5hbWU9eyduYW1lJ30gdmFsdWU9e3Byb3BzLm5hbWV9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj17J0VudGVyIE5hbWUgSGVyZSd9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydFbWFpbCd9IG5hbWU9eydlbWFpbCd9IHZhbHVlPXtwcm9wcy5lbWFpbH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPXsnRW50ZXIgRW1haWwgSGVyZSd9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eydwYXNzd29yZCd9IHRpdGxlPXsnUGFzc3dvcmQnfSBuYW1lPXsncGFzc3dvcmQnfSB2YWx1ZT17cHJvcHMucGFzc3dvcmR9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj17J0VudGVyIFBhc3N3b3JkIEhlcmUnfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnbmV4dEJ1dHRvbid9IGhhbmRsZU5leHQ9e3Byb3BzLmhhbmRsZU5leHR9IGJ1dHRvbk5hbWU9eyduZXh0J30gdHlwZT17J2J1dHRvbid9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250YWluZXIxOyJdfQ==