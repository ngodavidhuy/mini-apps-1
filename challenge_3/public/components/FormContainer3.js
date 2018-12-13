import Input from './Input.js';

class FormContainer3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      expiration: '',
      cvv: '',
      billingZip: ''
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit() {}

  handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return prevState[name] = value;
    });
  }

  render() {
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
        React.createElement(Input, { type: 'text', title: 'Card number', name: 'cardNumber', value: this.state.cardNumber, handleChange: this.handleChange }),
        React.createElement(Input, { type: 'text', title: 'Expiration date', name: 'expiration', value: this.state.expiration, handleChange: this.handleChange }),
        React.createElement(Input, { type: 'text', title: 'CVV', name: 'cvv', value: this.state.cvv, handleChange: this.handleChange }),
        React.createElement(Input, { type: 'text', title: 'Billing zip code', name: 'billingZip', value: this.state.billingZip, handleChange: this.handleChange })
      )
    );
  }
}

export default FormContainer3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIzLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkZvcm1Db250YWluZXIzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJjYXJkTnVtYmVyIiwiZXhwaXJhdGlvbiIsImN2diIsImJpbGxpbmdaaXAiLCJoYW5kbGVGb3JtU3VibWl0IiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsIm5hbWUiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjs7QUFFQSxNQUFNQyxjQUFOLFNBQTZCQyxNQUFNQyxTQUFuQyxDQUE2QztBQUMzQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLGtCQUFZLEVBREg7QUFFVEMsa0JBQVksRUFGSDtBQUdUQyxXQUFLLEVBSEk7QUFJVEMsa0JBQVk7QUFKSCxLQUFiOztBQU9BLFNBQUtDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREQscUJBQW1CLENBRWxCOztBQUVERSxlQUFhQyxDQUFiLEVBQWdCO0FBQ2QsUUFBSUMsUUFBUUQsRUFBRUUsTUFBRixDQUFTRCxLQUFyQjtBQUNBLFFBQUlFLE9BQU9ILEVBQUVFLE1BQUYsQ0FBU0MsSUFBcEI7QUFDQSxTQUFLQyxRQUFMLENBQWNDLGFBQWE7QUFDekIsYUFBT0EsVUFBVUYsSUFBVixJQUFrQkYsS0FBekI7QUFDRCxLQUZEO0FBR0Q7O0FBRURLLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxhQUE1QixFQUEyQyxNQUFNLFlBQWpELEVBQStELE9BQU8sS0FBS2QsS0FBTCxDQUFXQyxVQUFqRixFQUE2RixjQUFjLEtBQUtNLFlBQWhILEdBREY7QUFFRSw0QkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8saUJBQTVCLEVBQStDLE1BQU0sWUFBckQsRUFBbUUsT0FBTyxLQUFLUCxLQUFMLENBQVdFLFVBQXJGLEVBQWlHLGNBQWMsS0FBS0ssWUFBcEgsR0FGRjtBQUdFLDRCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxLQUE1QixFQUFtQyxNQUFNLEtBQXpDLEVBQWdELE9BQU8sS0FBS1AsS0FBTCxDQUFXRyxHQUFsRSxFQUF1RSxjQUFjLEtBQUtJLFlBQTFGLEdBSEY7QUFJRSw0QkFBQyxLQUFELElBQU8sTUFBTSxNQUFiLEVBQXFCLE9BQU8sa0JBQTVCLEVBQWdELE1BQU0sWUFBdEQsRUFBb0UsT0FBTyxLQUFLUCxLQUFMLENBQVdJLFVBQXRGLEVBQWtHLGNBQWMsS0FBS0csWUFBckg7QUFKRjtBQUZGLEtBREY7QUFXRDtBQXRDMEM7O0FBeUM3QyxlQUFlWixjQUFmIiwiZmlsZSI6IkZvcm1Db250YWluZXIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuXG5jbGFzcyBGb3JtQ29udGFpbmVyMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGNhcmROdW1iZXI6ICcnLFxuICAgICAgICBleHBpcmF0aW9uOiAnJyxcbiAgICAgICAgY3Z2OiAnJyxcbiAgICAgICAgYmlsbGluZ1ppcDogJydcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVGb3JtU3VibWl0KCkge1xuXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4gcHJldlN0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5GT1JNIDM8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3RleHQnfSB0aXRsZT17J0NhcmQgbnVtYmVyJ30gbmFtZT17J2NhcmROdW1iZXInfSB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJkTnVtYmVyfSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsndGV4dCd9IHRpdGxlPXsnRXhwaXJhdGlvbiBkYXRlJ30gbmFtZT17J2V4cGlyYXRpb24nfSB2YWx1ZT17dGhpcy5zdGF0ZS5leHBpcmF0aW9ufSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsndGV4dCd9IHRpdGxlPXsnQ1ZWJ30gbmFtZT17J2N2did9IHZhbHVlPXt0aGlzLnN0YXRlLmN2dn0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3RleHQnfSB0aXRsZT17J0JpbGxpbmcgemlwIGNvZGUnfSBuYW1lPXsnYmlsbGluZ1ppcCd9IHZhbHVlPXt0aGlzLnN0YXRlLmJpbGxpbmdaaXB9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRhaW5lcjM7Il19