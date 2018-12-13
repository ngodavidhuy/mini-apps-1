import Input from './Input.js';

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
    React.createElement(
      'button',
      null,
      'next'
    )
  );
};

export default FormContainer1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIxLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkZvcm1Db250YWluZXIxIiwicHJvcHMiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjs7QUFFQSxNQUFNQyxpQkFBa0JDLEtBQUQsSUFBVztBQUM5QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxXQUE1QixFQUF5QyxNQUFNLE1BQS9DLEVBQXVELE9BQU9BLE1BQU1DLElBQXBFLEVBQTBFLGNBQWNELE1BQU1FLFlBQTlGLEVBQTRHLGFBQWEsaUJBQXpILEdBREY7QUFFRSwwQkFBQyxLQUFELElBQU8sTUFBTSxPQUFiLEVBQXNCLE9BQU8sT0FBN0IsRUFBc0MsTUFBTSxPQUE1QyxFQUFxRCxPQUFPRixNQUFNRyxLQUFsRSxFQUF5RSxjQUFjSCxNQUFNRSxZQUE3RixFQUEyRyxhQUFhLGtCQUF4SCxHQUZGO0FBR0UsMEJBQUMsS0FBRCxJQUFPLE1BQU0sVUFBYixFQUF5QixPQUFPLFVBQWhDLEVBQTRDLE1BQU0sVUFBbEQsRUFBOEQsT0FBT0YsTUFBTUksUUFBM0UsRUFBcUYsY0FBY0osTUFBTUUsWUFBekcsRUFBdUgsYUFBYSxxQkFBcEk7QUFIRixLQUZGO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLEdBREY7QUFXSCxDQVpEOztBQWNBLGVBQWVILGNBQWYiLCJmaWxlIjoiRm9ybUNvbnRhaW5lcjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dC5qcyc7XG5cbmNvbnN0IEZvcm1Db250YWluZXIxID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5GT1JNIDE8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3RleHQnfSB0aXRsZT17J0Z1bGwgTmFtZSd9IG5hbWU9eyduYW1lJ30gdmFsdWU9e3Byb3BzLm5hbWV9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj17J0VudGVyIE5hbWUgSGVyZSd9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eydlbWFpbCd9IHRpdGxlPXsnRW1haWwnfSBuYW1lPXsnZW1haWwnfSB2YWx1ZT17cHJvcHMuZW1haWx9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSBwbGFjZWhvbGRlcj17J0VudGVyIEVtYWlsIEhlcmUnfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsncGFzc3dvcmQnfSB0aXRsZT17J1Bhc3N3b3JkJ30gbmFtZT17J3Bhc3N3b3JkJ30gdmFsdWU9e3Byb3BzLnBhc3N3b3JkfSBoYW5kbGVDaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9eydFbnRlciBQYXNzd29yZCBIZXJlJ30gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uPm5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250YWluZXIxOyJdfQ==