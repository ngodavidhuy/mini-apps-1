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
    React.createElement(Button, { className: 'confirmButton', handleNext: props.handleNext, buttonName: 'Purchase!' })
  );
};

export default Confirmation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbi5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJCdXR0b24iLCJDb25maXJtYXRpb24iLCJwcm9wcyIsInB1cmNoYXNlSW5mbyIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiY2FyZE51bWJlciIsImV4cGlyYXRpb24iLCJjdnYiLCJiaWxsaW5nWmlwIiwiaGFuZGxlTmV4dCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsYUFBbkI7O0FBRUEsTUFBTUMsZUFBZ0JDLEtBQUQsSUFBVztBQUM1QixTQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQWdCQSxjQUFNQyxZQUFOLENBQW1CQztBQUFuQyxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBWUYsY0FBTUMsWUFBTixDQUFtQkU7QUFBL0IsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQWVILGNBQU1DLFlBQU4sQ0FBbUJHO0FBQWxDLE9BSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFxQkosY0FBTUMsWUFBTixDQUFtQkk7QUFBeEMsT0FKRjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQXFCTCxjQUFNQyxZQUFOLENBQW1CSztBQUF4QyxPQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBV04sY0FBTUMsWUFBTixDQUFtQk07QUFBOUIsT0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQVlQLGNBQU1DLFlBQU4sQ0FBbUJPO0FBQS9CLE9BUEY7QUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFVUixjQUFNQyxZQUFOLENBQW1CUTtBQUE3QixPQVJGO0FBU0U7QUFBQTtBQUFBO0FBQUE7QUFBbUJULGNBQU1DLFlBQU4sQ0FBbUJTO0FBQXRDLE9BVEY7QUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFrQlYsY0FBTUMsWUFBTixDQUFtQlU7QUFBckMsT0FWRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQWlCWCxjQUFNQyxZQUFOLENBQW1CVztBQUFwQyxPQVhGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBWVosY0FBTUMsWUFBTixDQUFtQlk7QUFBL0IsT0FaRjtBQWFFO0FBQUE7QUFBQTtBQUFBO0FBQWtCYixjQUFNQyxZQUFOLENBQW1CYTtBQUFyQztBQWJGLEtBRkY7QUFpQkUsd0JBQUMsTUFBRCxJQUFRLFdBQVUsZUFBbEIsRUFBa0MsWUFBWWQsTUFBTWUsVUFBcEQsRUFBZ0UsWUFBWSxXQUE1RTtBQWpCRixHQURGO0FBcUJILENBdEJEOztBQXdCQSxlQUFlaEIsWUFBZiIsImZpbGUiOiJDb25maXJtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dC5qcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLmpzJztcblxuY29uc3QgQ29uZmlybWF0aW9uID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5QdXJjaGFzZSBTdW1tYXJ5PC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5GdWxsIE5hbWU6IHtwcm9wcy5wdXJjaGFzZUluZm8ubmFtZX08L2xpPlxuICAgICAgICAgIDxsaT5FbWFpbDoge3Byb3BzLnB1cmNoYXNlSW5mby5lbWFpbH08L2xpPlxuICAgICAgICAgIDxsaT5QYXNzd29yZDoge3Byb3BzLnB1cmNoYXNlSW5mby5wYXNzd29yZH08L2xpPlxuICAgICAgICAgIDxsaT5BZGRyZXNzIExpbmUgMToge3Byb3BzLnB1cmNoYXNlSW5mby5hZGRyZXNzMX08L2xpPlxuICAgICAgICAgIDxsaT5BZGRyZXNzIExpbmUgMjoge3Byb3BzLnB1cmNoYXNlSW5mby5hZGRyZXNzMn08L2xpPlxuICAgICAgICAgIDxsaT5DaXR5OiB7cHJvcHMucHVyY2hhc2VJbmZvLmNpdHl9PC9saT5cbiAgICAgICAgICA8bGk+U3RhdGU6IHtwcm9wcy5wdXJjaGFzZUluZm8uc3RhdGV9PC9saT5cbiAgICAgICAgICA8bGk+WmlwOiB7cHJvcHMucHVyY2hhc2VJbmZvLnppcH08L2xpPlxuICAgICAgICAgIDxsaT5QaG9uZSBudW1iZXI6IHtwcm9wcy5wdXJjaGFzZUluZm8ucGhvbmV9PC9saT5cbiAgICAgICAgICA8bGk+Q2FyZCBudW1iZXI6IHtwcm9wcy5wdXJjaGFzZUluZm8uY2FyZE51bWJlcn08L2xpPlxuICAgICAgICAgIDxsaT5FeHBpcmF0aW9uOiB7cHJvcHMucHVyY2hhc2VJbmZvLmV4cGlyYXRpb259PC9saT5cbiAgICAgICAgICA8bGk+Q1ZWICM6IHtwcm9wcy5wdXJjaGFzZUluZm8uY3Z2fTwvbGk+XG4gICAgICAgICAgPGxpPkJpbGxpbmcgemlwOiB7cHJvcHMucHVyY2hhc2VJbmZvLmJpbGxpbmdaaXB9PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJjb25maXJtQnV0dG9uXCIgaGFuZGxlTmV4dD17cHJvcHMuaGFuZGxlTmV4dH0gYnV0dG9uTmFtZT17J1B1cmNoYXNlISd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtYXRpb247Il19