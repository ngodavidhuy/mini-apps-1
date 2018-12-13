import FormContainer1 from './FormContainer1.js';
import FormContainer2 from './FormContainer2.js';
import FormContainer3 from './FormContainer3.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
      billingZip: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

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
      { className: 'main-container' },
      React.createElement(
        'h1',
        null,
        'React Form'
      ),
      React.createElement(
        'button',
        null,
        'Checkout'
      ),
      React.createElement(FormContainer1, { handleChange: this.handleChange, name: this.state.name, email: this.state.email, password: this.state.password }),
      React.createElement(FormContainer2, { handleChange: this.handleChange, address1: this.state.address1, address2: this.state.address2,
        city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone }),
      React.createElement(FormContainer3, { handleChange: this.handleChange, cardNumber: this.state.cardNumber, expiration: this.state.expiration,
        cvv: this.state.cvv, billingZip: this.state.billingZip })
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRm9ybUNvbnRhaW5lcjEiLCJGb3JtQ29udGFpbmVyMiIsIkZvcm1Db250YWluZXIzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjYXJkTnVtYmVyIiwiZXhwaXJhdGlvbiIsImN2diIsImJpbGxpbmdaaXAiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZSIsInZhbHVlIiwidGFyZ2V0Iiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIscUJBQTNCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixxQkFBM0I7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLHFCQUEzQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZ0JBQVUsRUFIQztBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLGdCQUFVLEVBTEM7QUFNWEMsWUFBTSxFQU5LO0FBT1hOLGFBQU8sRUFQSTtBQVFYTyxXQUFLLEVBUk07QUFTWEMsYUFBTyxFQVRJO0FBVVhDLGtCQUFZLEVBVkQ7QUFXWEMsa0JBQVksRUFYRDtBQVlYQyxXQUFLLEVBWk07QUFhWEMsa0JBQVk7QUFiRCxLQUFiOztBQWdCQSxTQUFLQyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0Q7O0FBRURELGVBQWFFLENBQWIsRUFBZ0I7QUFDZCxRQUFJQyxRQUFRRCxFQUFFRSxNQUFGLENBQVNELEtBQXJCO0FBQ0EsUUFBSWYsT0FBT2MsRUFBRUUsTUFBRixDQUFTaEIsSUFBcEI7QUFDQSxTQUFLaUIsUUFBTCxDQUFjQyxhQUFhO0FBQ3pCLGFBQU9BLFVBQVVsQixJQUFWLElBQWtCZSxLQUF6QjtBQUNELEtBRkQ7QUFHRDs7QUFFREksV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FKRjtBQU1FLDBCQUFDLGNBQUQsSUFBZ0IsY0FBYyxLQUFLUCxZQUFuQyxFQUFpRCxNQUFNLEtBQUtiLEtBQUwsQ0FBV0MsSUFBbEUsRUFBd0UsT0FBTyxLQUFLRCxLQUFMLENBQVdFLEtBQTFGLEVBQWlHLFVBQVUsS0FBS0YsS0FBTCxDQUFXRyxRQUF0SCxHQU5GO0FBUUUsMEJBQUMsY0FBRCxJQUFnQixjQUFjLEtBQUtVLFlBQW5DLEVBQWlELFVBQVUsS0FBS2IsS0FBTCxDQUFXSSxRQUF0RSxFQUFnRixVQUFVLEtBQUtKLEtBQUwsQ0FBV0ssUUFBckc7QUFDQSxjQUFNLEtBQUtMLEtBQUwsQ0FBV00sSUFEakIsRUFDdUIsT0FBTyxLQUFLTixLQUFMLENBQVdBLEtBRHpDLEVBQ2dELEtBQUssS0FBS0EsS0FBTCxDQUFXTyxHQURoRSxFQUNxRSxPQUFPLEtBQUtQLEtBQUwsQ0FBV1EsS0FEdkYsR0FSRjtBQVdFLDBCQUFDLGNBQUQsSUFBZ0IsY0FBYyxLQUFLSyxZQUFuQyxFQUFpRCxZQUFZLEtBQUtiLEtBQUwsQ0FBV1MsVUFBeEUsRUFBb0YsWUFBWSxLQUFLVCxLQUFMLENBQVdVLFVBQTNHO0FBQ0EsYUFBSyxLQUFLVixLQUFMLENBQVdXLEdBRGhCLEVBQ3FCLFlBQVksS0FBS1gsS0FBTCxDQUFXWSxVQUQ1QztBQVhGLEtBREY7QUFpQkQ7QUFoRCtCOztBQW1EbEMsZUFBZWpCLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1Db250YWluZXIxIGZyb20gJy4vRm9ybUNvbnRhaW5lcjEuanMnO1xuaW1wb3J0IEZvcm1Db250YWluZXIyIGZyb20gJy4vRm9ybUNvbnRhaW5lcjIuanMnO1xuaW1wb3J0IEZvcm1Db250YWluZXIzIGZyb20gJy4vRm9ybUNvbnRhaW5lcjMuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhZGRyZXNzMTogJycsXG4gICAgICBhZGRyZXNzMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICAgIGV4cGlyYXRpb246ICcnLFxuICAgICAgY3Z2OiAnJyxcbiAgICAgIGJpbGxpbmdaaXA6ICcnXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBsZXQgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHByZXZTdGF0ZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XG5cbiAgICAgICAgPGgxPlJlYWN0IEZvcm08L2gxPlxuICAgICAgICBcbiAgICAgICAgPGJ1dHRvbj5DaGVja291dDwvYnV0dG9uPlxuXG4gICAgICAgIDxGb3JtQ29udGFpbmVyMSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBuYW1lPXt0aGlzLnN0YXRlLm5hbWV9IGVtYWlsPXt0aGlzLnN0YXRlLmVtYWlsfSBwYXNzd29yZD17dGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuXG4gICAgICAgIDxGb3JtQ29udGFpbmVyMiBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBhZGRyZXNzMT17dGhpcy5zdGF0ZS5hZGRyZXNzMX0gYWRkcmVzczI9e3RoaXMuc3RhdGUuYWRkcmVzczJ9IFxuICAgICAgICBjaXR5PXt0aGlzLnN0YXRlLmNpdHl9IHN0YXRlPXt0aGlzLnN0YXRlLnN0YXRlfSB6aXA9e3RoaXMuc3RhdGUuemlwfSBwaG9uZT17dGhpcy5zdGF0ZS5waG9uZX0vPlxuXG4gICAgICAgIDxGb3JtQ29udGFpbmVyMyBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBjYXJkTnVtYmVyPXt0aGlzLnN0YXRlLmNhcmROdW1iZXJ9IGV4cGlyYXRpb249e3RoaXMuc3RhdGUuZXhwaXJhdGlvbn0gXG4gICAgICAgIGN2dj17dGhpcy5zdGF0ZS5jdnZ9IGJpbGxpbmdaaXA9e3RoaXMuc3RhdGUuYmlsbGluZ1ppcH0vPlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19