import Input from './Input.js';
import Button from './Button.js';

const Confirmation = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Purchase Summary'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        'Full Name: ',
        props.purchaseInfo.name
      ),
      React.createElement(
        'li',
        null,
        'Email: ',
        props.purchaseInfo.email
      ),
      React.createElement(
        'li',
        null,
        'Password: ',
        props.purchaseInfo.password
      ),
      React.createElement(
        'li',
        null,
        'Address Line 1: ',
        props.purchaseInfo.address1
      ),
      React.createElement(
        'li',
        null,
        'Address Line 2: ',
        props.purchaseInfo.address2
      ),
      React.createElement(
        'li',
        null,
        'City: ',
        props.purchaseInfo.city
      ),
      React.createElement(
        'li',
        null,
        'State: ',
        props.purchaseInfo.state
      ),
      React.createElement(
        'li',
        null,
        'Zip: ',
        props.purchaseInfo.zip
      ),
      React.createElement(
        'li',
        null,
        'Phone number: ',
        props.purchaseInfo.phone
      ),
      React.createElement(
        'li',
        null,
        'Card number: ',
        props.purchaseInfo.cardNumber
      ),
      React.createElement(
        'li',
        null,
        'Expiration: ',
        props.purchaseInfo.expiration
      ),
      React.createElement(
        'li',
        null,
        'CVV #: ',
        props.purchaseInfo.cvv
      ),
      React.createElement(
        'li',
        null,
        'Billing zip: ',
        props.purchaseInfo.billingZip
      )
    ),
    React.createElement(Button, { className: 'submitButton', handleSubmit: props.handleSubmit, buttonName: 'Purchase!', type: 'submit' })
  );
};

export default Confirmation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbi5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJCdXR0b24iLCJDb25maXJtYXRpb24iLCJwcm9wcyIsInB1cmNoYXNlSW5mbyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiY2FyZE51bWJlciIsImV4cGlyYXRpb24iLCJjdnYiLCJiaWxsaW5nWmlwIiwiaGFuZGxlU3VibWl0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLFlBQWxCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQSxNQUFNQyxlQUFnQkMsS0FBRCxJQUFXO0FBQzVCLFNBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZ0JBLGNBQU1DLFlBQU4sQ0FBbUJDO0FBQW5DLE9BREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFZRixjQUFNQyxZQUFOLENBQW1CRTtBQUEvQixPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBZUgsY0FBTUMsWUFBTixDQUFtQkc7QUFBbEMsT0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQXFCSixjQUFNQyxZQUFOLENBQW1CSTtBQUF4QyxPQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBcUJMLGNBQU1DLFlBQU4sQ0FBbUJLO0FBQXhDLE9BTEY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFXTixjQUFNQyxZQUFOLENBQW1CTTtBQUE5QixPQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBWVAsY0FBTUMsWUFBTixDQUFtQk87QUFBL0IsT0FQRjtBQVFFO0FBQUE7QUFBQTtBQUFBO0FBQVVSLGNBQU1DLFlBQU4sQ0FBbUJRO0FBQTdCLE9BUkY7QUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFtQlQsY0FBTUMsWUFBTixDQUFtQlM7QUFBdEMsT0FURjtBQVVFO0FBQUE7QUFBQTtBQUFBO0FBQWtCVixjQUFNQyxZQUFOLENBQW1CVTtBQUFyQyxPQVZGO0FBV0U7QUFBQTtBQUFBO0FBQUE7QUFBaUJYLGNBQU1DLFlBQU4sQ0FBbUJXO0FBQXBDLE9BWEY7QUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFZWixjQUFNQyxZQUFOLENBQW1CWTtBQUEvQixPQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBa0JiLGNBQU1DLFlBQU4sQ0FBbUJhO0FBQXJDO0FBYkYsS0FGRjtBQWlCRSx3QkFBQyxNQUFELElBQVEsV0FBVyxjQUFuQixFQUFtQyxjQUFjZCxNQUFNZSxZQUF2RCxFQUFxRSxZQUFZLFdBQWpGLEVBQThGLE1BQU0sUUFBcEc7QUFqQkYsR0FERjtBQXFCSCxDQXRCRDs7QUF3QkEsZUFBZWhCLFlBQWYiLCJmaWxlIjoiQ29uZmlybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5qcyc7XG5cbmNvbnN0IENvbmZpcm1hdGlvbiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UHVyY2hhc2UgU3VtbWFyeTwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RnVsbCBOYW1lOiB7cHJvcHMucHVyY2hhc2VJbmZvLm5hbWV9PC9saT5cbiAgICAgICAgICA8bGk+RW1haWw6IHtwcm9wcy5wdXJjaGFzZUluZm8uZW1haWx9PC9saT5cbiAgICAgICAgICA8bGk+UGFzc3dvcmQ6IHtwcm9wcy5wdXJjaGFzZUluZm8ucGFzc3dvcmR9PC9saT5cbiAgICAgICAgICA8bGk+QWRkcmVzcyBMaW5lIDE6IHtwcm9wcy5wdXJjaGFzZUluZm8uYWRkcmVzczF9PC9saT5cbiAgICAgICAgICA8bGk+QWRkcmVzcyBMaW5lIDI6IHtwcm9wcy5wdXJjaGFzZUluZm8uYWRkcmVzczJ9PC9saT5cbiAgICAgICAgICA8bGk+Q2l0eToge3Byb3BzLnB1cmNoYXNlSW5mby5jaXR5fTwvbGk+XG4gICAgICAgICAgPGxpPlN0YXRlOiB7cHJvcHMucHVyY2hhc2VJbmZvLnN0YXRlfTwvbGk+XG4gICAgICAgICAgPGxpPlppcDoge3Byb3BzLnB1cmNoYXNlSW5mby56aXB9PC9saT5cbiAgICAgICAgICA8bGk+UGhvbmUgbnVtYmVyOiB7cHJvcHMucHVyY2hhc2VJbmZvLnBob25lfTwvbGk+XG4gICAgICAgICAgPGxpPkNhcmQgbnVtYmVyOiB7cHJvcHMucHVyY2hhc2VJbmZvLmNhcmROdW1iZXJ9PC9saT5cbiAgICAgICAgICA8bGk+RXhwaXJhdGlvbjoge3Byb3BzLnB1cmNoYXNlSW5mby5leHBpcmF0aW9ufTwvbGk+XG4gICAgICAgICAgPGxpPkNWViAjOiB7cHJvcHMucHVyY2hhc2VJbmZvLmN2dn08L2xpPlxuICAgICAgICAgIDxsaT5CaWxsaW5nIHppcDoge3Byb3BzLnB1cmNoYXNlSW5mby5iaWxsaW5nWmlwfTwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXsnc3VibWl0QnV0dG9uJ30gaGFuZGxlU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9IGJ1dHRvbk5hbWU9eydQdXJjaGFzZSEnfSB0eXBlPXsnc3VibWl0J30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybWF0aW9uOyJdfQ==