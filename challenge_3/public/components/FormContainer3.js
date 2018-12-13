import Input from './Input.js';

const FormContainer3 = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'FORM 3'
    ),
    React.createElement(
      'form',
      null,
      React.createElement(Input, { type: 'text', title: 'Card number', name: 'cardNumber', value: props.cardNumber, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'Expiration date', name: 'expiration', value: props.expiration, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'CVV', name: 'cvv', value: props.cvv, handleChange: props.handleChange }),
      React.createElement(Input, { type: 'text', title: 'Billing zip code', name: 'billingZip', value: props.billingZip, handleChange: props.handleChange })
    )
  );
};

export default FormContainer3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIzLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkZvcm1Db250YWluZXIzIiwicHJvcHMiLCJjYXJkTnVtYmVyIiwiaGFuZGxlQ2hhbmdlIiwiZXhwaXJhdGlvbiIsImN2diIsImJpbGxpbmdaaXAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsWUFBbEI7O0FBRUEsTUFBTUMsaUJBQWtCQyxLQUFELElBQVc7QUFDOUIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUE7QUFDRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sYUFBNUIsRUFBMkMsTUFBTSxZQUFqRCxFQUErRCxPQUFPQSxNQUFNQyxVQUE1RSxFQUF3RixjQUFjRCxNQUFNRSxZQUE1RyxHQURGO0FBRUUsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLGlCQUE1QixFQUErQyxNQUFNLFlBQXJELEVBQW1FLE9BQU9GLE1BQU1HLFVBQWhGLEVBQTRGLGNBQWNILE1BQU1FLFlBQWhILEdBRkY7QUFHRSwwQkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sS0FBNUIsRUFBbUMsTUFBTSxLQUF6QyxFQUFnRCxPQUFPRixNQUFNSSxHQUE3RCxFQUFrRSxjQUFjSixNQUFNRSxZQUF0RixHQUhGO0FBSUUsMEJBQUMsS0FBRCxJQUFPLE1BQU0sTUFBYixFQUFxQixPQUFPLGtCQUE1QixFQUFnRCxNQUFNLFlBQXRELEVBQW9FLE9BQU9GLE1BQU1LLFVBQWpGLEVBQTZGLGNBQWNMLE1BQU1FLFlBQWpIO0FBSkY7QUFGRixHQURGO0FBV0gsQ0FaRDs7QUFjQSxlQUFlSCxjQUFmIiwiZmlsZSI6IkZvcm1Db250YWluZXIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuXG5jb25zdCBGb3JtQ29udGFpbmVyMyA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Rk9STSAzPC9oMT5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydDYXJkIG51bWJlcid9IG5hbWU9eydjYXJkTnVtYmVyJ30gdmFsdWU9e3Byb3BzLmNhcmROdW1iZXJ9IGhhbmRsZUNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsndGV4dCd9IHRpdGxlPXsnRXhwaXJhdGlvbiBkYXRlJ30gbmFtZT17J2V4cGlyYXRpb24nfSB2YWx1ZT17cHJvcHMuZXhwaXJhdGlvbn0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydDVlYnfSBuYW1lPXsnY3Z2J30gdmFsdWU9e3Byb3BzLmN2dn0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eyd0ZXh0J30gdGl0bGU9eydCaWxsaW5nIHppcCBjb2RlJ30gbmFtZT17J2JpbGxpbmdaaXAnfSB2YWx1ZT17cHJvcHMuYmlsbGluZ1ppcH0gaGFuZGxlQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250YWluZXIzOyJdfQ==