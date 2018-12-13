import Input from './Input.js';

const FormContainer2 = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'FORM 2'
    ),
    React.createElement(
      'form',
      null,
      React.createElement(Input, { type: 'text', title: 'Address Line 1', name: 'address1', value: props.address1, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'Address Line 2', name: 'address2', value: props.address2, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'City', name: 'city', value: props.city, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'State', name: 'state', value: props.state, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'Zip', name: 'zip', value: props.zip, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'Phone number', name: 'phone', value: props.phone, handleChange: props.handleChange })
    ),
    React.createElement(
      'button',
      null,
      'next'
    )
  );
};

export default FormContainer2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIyLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkZvcm1Db250YWluZXIyIiwicHJvcHMiLCJhZGRyZXNzMSIsImhhbmRsZUNoYW5nZSIsImFkZHJlc3MyIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsWUFBbEI7O0FBRUEsTUFBTUMsaUJBQWtCQyxLQUFELElBQVc7QUFDOUIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sZ0JBQTVCLEVBQThDLE1BQU0sVUFBcEQsRUFBZ0UsT0FBT0EsTUFBTUMsUUFBN0UsRUFBdUYsY0FBY0QsTUFBTUUsWUFBM0csR0FERjtBQUVFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxnQkFBNUIsRUFBOEMsTUFBTSxVQUFwRCxFQUFnRSxPQUFPRixNQUFNRyxRQUE3RSxFQUF1RixjQUFjSCxNQUFNRSxZQUEzRyxHQUZGO0FBR0UsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLE1BQTVCLEVBQW9DLE1BQU0sTUFBMUMsRUFBa0QsT0FBT0YsTUFBTUksSUFBL0QsRUFBcUUsY0FBY0osTUFBTUUsWUFBekYsR0FIRjtBQUlFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxPQUE1QixFQUFxQyxNQUFNLE9BQTNDLEVBQW9ELE9BQU9GLE1BQU1LLEtBQWpFLEVBQXdFLGNBQWNMLE1BQU1FLFlBQTVGLEdBSkY7QUFLRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sS0FBNUIsRUFBbUMsTUFBTSxLQUF6QyxFQUFnRCxPQUFPRixNQUFNTSxHQUE3RCxFQUFrRSxjQUFjTixNQUFNRSxZQUF0RixHQUxGO0FBTUUsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLGNBQTVCLEVBQTRDLE1BQU0sT0FBbEQsRUFBMkQsT0FBT0YsTUFBTU8sS0FBeEUsRUFBK0UsY0FBY1AsTUFBTUUsWUFBbkc7QUFORixLQUZGO0FBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLEdBREY7QUFjSCxDQWZEOztBQWlCQSxlQUFlSCxjQUFmIiwiZmlsZSI6IkZvcm1Db250YWluZXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyMiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Rk9STSAyPC9oMT5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydBZGRyZXNzIExpbmUgMSd9IG5hbWU9eydhZGRyZXNzMSd9IHZhbHVlPXtwcm9wcy5hZGRyZXNzMX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydBZGRyZXNzIExpbmUgMid9IG5hbWU9eydhZGRyZXNzMid9IHZhbHVlPXtwcm9wcy5hZGRyZXNzMn0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydDaXR5J30gbmFtZT17J2NpdHknfSB2YWx1ZT17cHJvcHMuY2l0eX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydTdGF0ZSd9IG5hbWU9eydzdGF0ZSd9IHZhbHVlPXtwcm9wcy5zdGF0ZX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydaaXAnfSBuYW1lPXsnemlwJ30gdmFsdWU9e3Byb3BzLnppcH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydQaG9uZSBudW1iZXInfSBuYW1lPXsncGhvbmUnfSB2YWx1ZT17cHJvcHMucGhvbmV9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24+bmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRhaW5lcjI7Il19