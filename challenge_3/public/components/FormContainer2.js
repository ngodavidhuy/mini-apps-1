import Input from './Input.js';
import Button from './Button.js';

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
    React.createElement(Button, { className: 'nextButton', handleNext: props.handleNext, buttonName: 'next', type: 'button' })
  );
};

export default FormContainer2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIyLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkJ1dHRvbiIsIkZvcm1Db250YWluZXIyIiwicHJvcHMiLCJhZGRyZXNzMSIsImhhbmRsZUNoYW5nZSIsImFkZHJlc3MyIiwiY2l0eSIsInN0YXRlIiwiemlwIiwicGhvbmUiLCJoYW5kbGVOZXh0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLFlBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQSxNQUFNQyxpQkFBa0JDLEtBQUQsSUFBVztBQUM5QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxnQkFBNUIsRUFBOEMsTUFBTSxVQUFwRCxFQUFnRSxPQUFPQSxNQUFNQyxRQUE3RSxFQUF1RixjQUFjRCxNQUFNRSxZQUEzRyxHQURGO0FBRUUsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLGdCQUE1QixFQUE4QyxNQUFNLFVBQXBELEVBQWdFLE9BQU9GLE1BQU1HLFFBQTdFLEVBQXVGLGNBQWNILE1BQU1FLFlBQTNHLEdBRkY7QUFHRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sTUFBNUIsRUFBb0MsTUFBTSxNQUExQyxFQUFrRCxPQUFPRixNQUFNSSxJQUEvRCxFQUFxRSxjQUFjSixNQUFNRSxZQUF6RixHQUhGO0FBSUUsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLE9BQTVCLEVBQXFDLE1BQU0sT0FBM0MsRUFBb0QsT0FBT0YsTUFBTUssS0FBakUsRUFBd0UsY0FBY0wsTUFBTUUsWUFBNUYsR0FKRjtBQUtFLDBCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxLQUE1QixFQUFtQyxNQUFNLEtBQXpDLEVBQWdELE9BQU9GLE1BQU1NLEdBQTdELEVBQWtFLGNBQWNOLE1BQU1FLFlBQXRGLEdBTEY7QUFNRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sY0FBNUIsRUFBNEMsTUFBTSxPQUFsRCxFQUEyRCxPQUFPRixNQUFNTyxLQUF4RSxFQUErRSxjQUFjUCxNQUFNRSxZQUFuRztBQU5GLEtBRkY7QUFVRSx3QkFBQyxNQUFELElBQVEsV0FBVyxZQUFuQixFQUFpQyxZQUFZRixNQUFNUSxVQUFuRCxFQUErRCxZQUFZLE1BQTNFLEVBQW1GLE1BQU0sUUFBekY7QUFWRixHQURGO0FBY0gsQ0FmRDs7QUFpQkEsZUFBZVQsY0FBZiIsImZpbGUiOiJGb3JtQ29udGFpbmVyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0LmpzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uanMnO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyMiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Rk9STSAyPC9oMT5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydBZGRyZXNzIExpbmUgMSd9IG5hbWU9eydhZGRyZXNzMSd9IHZhbHVlPXtwcm9wcy5hZGRyZXNzMX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydBZGRyZXNzIExpbmUgMid9IG5hbWU9eydhZGRyZXNzMid9IHZhbHVlPXtwcm9wcy5hZGRyZXNzMn0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydDaXR5J30gbmFtZT17J2NpdHknfSB2YWx1ZT17cHJvcHMuY2l0eX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydTdGF0ZSd9IG5hbWU9eydzdGF0ZSd9IHZhbHVlPXtwcm9wcy5zdGF0ZX0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydaaXAnfSBuYW1lPXsnemlwJ30gdmFsdWU9e3Byb3BzLnppcH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydQaG9uZSBudW1iZXInfSBuYW1lPXsncGhvbmUnfSB2YWx1ZT17cHJvcHMucGhvbmV9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnbmV4dEJ1dHRvbid9IGhhbmRsZU5leHQ9e3Byb3BzLmhhbmRsZU5leHR9IGJ1dHRvbk5hbWU9eyduZXh0J30gdHlwZT17J2J1dHRvbid9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udGFpbmVyMjsiXX0=