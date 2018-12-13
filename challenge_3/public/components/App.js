import FormContainer1 from './FormContainer1.js';
import FormContainer2 from './FormContainer2.js';
import FormContainer3 from './FormContainer3.js';
import Button from './Button.js';
import Confirmation from './Confirmation.js';

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
      billingZip: '',
      page: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return prevState[name] = value;
    });
  }

  handleNext(e) {
    if (this.state.page < 4) {
      this.setState(prevState => {
        return prevState.page++;
      });
    } else {
      this.setState(prevState => {
        return prevState.page = 0;
      });
    }
  }

  render() {
    let currentView = this.state.page;
    let form;

    if (currentView === 0) {
      form = React.createElement(Button, { handleNext: this.handleNext, buttonName: 'Checkout' });
    } else if (currentView === 1) {
      form = React.createElement(FormContainer1, { handleChange: this.handleChange, handleNext: this.handleNext, name: this.state.name, email: this.state.email, password: this.state.password });
    } else if (currentView === 2) {
      form = React.createElement(FormContainer2, { handleChange: this.handleChange, handleNext: this.handleNext, address1: this.state.address1, address2: this.state.address2,
        city: this.state.city, state: this.state.state, zip: this.state.zip, phone: this.state.phone });
    } else if (currentView === 3) {
      form = React.createElement(FormContainer3, { handleChange: this.handleChange, handleNext: this.handleNext, cardNumber: this.state.cardNumber, expiration: this.state.expiration,
        cvv: this.state.cvv, billingZip: this.state.billingZip });
    } else if (currentView === 4) {
      form = React.createElement(Confirmation, { purchaseInfo: this.state, handleNext: this.handleNext });
    }

    return React.createElement(
      'div',
      { className: 'main-container' },
      React.createElement(
        'h1',
        null,
        'React Form'
      ),
      form
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRm9ybUNvbnRhaW5lcjEiLCJGb3JtQ29udGFpbmVyMiIsIkZvcm1Db250YWluZXIzIiwiQnV0dG9uIiwiQ29uZmlybWF0aW9uIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJjYXJkTnVtYmVyIiwiZXhwaXJhdGlvbiIsImN2diIsImJpbGxpbmdaaXAiLCJwYWdlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZU5leHQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciIsImN1cnJlbnRWaWV3IiwiZm9ybSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixxQkFBM0I7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLHFCQUEzQjtBQUNBLE9BQU9DLGNBQVAsTUFBMkIscUJBQTNCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsbUJBQXpCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYQyxnQkFBVSxFQUhDO0FBSVhDLGdCQUFVLEVBSkM7QUFLWEMsZ0JBQVUsRUFMQztBQU1YQyxZQUFNLEVBTks7QUFPWE4sYUFBTyxFQVBJO0FBUVhPLFdBQUssRUFSTTtBQVNYQyxhQUFPLEVBVEk7QUFVWEMsa0JBQVksRUFWRDtBQVdYQyxrQkFBWSxFQVhEO0FBWVhDLFdBQUssRUFaTTtBQWFYQyxrQkFBWSxF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dGVudCI6WyJpbXBvcnQgRm9ybUNvbnRhaW5lcjEgZnJvbSAnLi9Gb3JtQ29udGFpbmVyMS5qcyc7XG5pbXBvcnQgRm9ybUNvbnRhaW5lcjIgZnJvbSAnLi9Gb3JtQ29udGFpbmVyMi5qcyc7XG5pbXBvcnQgRm9ybUNvbnRhaW5lcjMgZnJvbSAnLi9Gb3JtQ29udGFpbmVyMy5qcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLmpzJztcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSAnLi9Db25maXJtYXRpb24uanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBhZGRyZXNzMTogJycsXG4gICAgICBhZGRyZXNzMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBjYXJkTnVtYmVyOiAnJyxcbiAgICAgIGV4cGlyYXRpb246ICcnLFxuICAgICAgY3Z2OiAnJyxcbiAgICAgIGJpbGxpbmdaaXA6ICcnLFxuICAgICAgcGFnZTogMFxuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU5leHQgPSB0aGlzLmhhbmRsZU5leHQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIHJldHVybiBwcmV2U3RhdGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoZSkge1xuICAgIGlmICh0aGlzLnN0YXRlLnBhZ2UgPCA0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGUucGFnZSsrO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5wYWdlID0gMDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY3VycmVudFZpZXcgPSB0aGlzLnN0YXRlLnBhZ2U7XG4gICAgbGV0IGZvcm07XG5cbiAgICBpZiAoY3VycmVudFZpZXcgPT09IDApIHtcbiAgICAgIGZvcm0gPSA8QnV0dG9uIGhhbmRsZU5leHQ9e3RoaXMuaGFuZGxlTmV4dH0gYnV0dG9uTmFtZT17J0NoZWNrb3V0J30gLz47XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gMSkge1xuICAgICAgZm9ybSA9IDxGb3JtQ29udGFpbmVyMSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSBoYW5kbGVOZXh0PXt0aGlzLmhhbmRsZU5leHR9IG5hbWU9e3RoaXMuc3RhdGUubmFtZX0gZW1haWw9e3RoaXMuc3RhdGUuZW1haWx9IHBhc3N3b3JkPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSAvPjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAyKSB7XG4gICAgICBmb3JtID0gPEZvcm1Db250YWluZXIyIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGhhbmRsZU5leHQ9e3RoaXMuaGFuZGxlTmV4dH0gYWRkcmVzczE9e3RoaXMuc3RhdGUuYWRkcmVzczF9IGFkZHJlc3MyPXt0aGlzLnN0YXRlLmFkZHJlc3MyfSBcbiAgICAgICAgICAgICAgY2l0eT17dGhpcy5zdGF0ZS5jaXR5fSBzdGF0ZT17dGhpcy5zdGF0ZS5zdGF0ZX0gemlwPXt0aGlzLnN0YXRlLnppcH0gcGhvbmU9e3RoaXMuc3RhdGUucGhvbmV9IC8+O1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09IDMpIHtcbiAgICAgIGZvcm0gPSA8Rm9ybUNvbnRhaW5lcjMgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gaGFuZGxlTmV4dD17dGhpcy5oYW5kbGVOZXh0fSBjYXJkTnVtYmVyPXt0aGlzLnN0YXRlLmNhcmROdW1iZXJ9IGV4cGlyYXRpb249e3RoaXMuc3RhdGUuZXhwaXJhdGlvbn0gXG4gICAgICAgICAgICAgIGN2dj17dGhpcy5zdGF0ZS5jdnZ9IGJpbGxpbmdaaXA9e3RoaXMuc3RhdGUuYmlsbGluZ1ppcH0gLz47XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gNCkge1xuICAgICAgZm9ybSA9IDxDb25maXJtYXRpb24gcHVyY2hhc2VJbmZvPXt0aGlzLnN0YXRlfSBoYW5kbGVOZXh0PXt0aGlzLmhhbmRsZU5leHR9Lz5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+UmVhY3QgRm9ybTwvaDE+XG4gICAgICAgIHtmb3JtfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cbiJdfQ==