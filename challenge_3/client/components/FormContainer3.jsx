import Input from './Input.js';

class FormContainer3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        cardNumber: '',
        expiration: '',
        cvv: '',
        billingZip: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit() {

  }

  handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return prevState[name] = value;
    });
  }

  render() {
    return (
      <div>
        <h1>FORM 3</h1>
        <form>
          <Input type={'text'} title={'Card number'} name={'cardNumber'} value={this.state.cardNumber} handleChange={this.handleChange} />
          <Input type={'text'} title={'Expiration date'} name={'expiration'} value={this.state.expiration} handleChange={this.handleChange} />
          <Input type={'text'} title={'CVV'} name={'cvv'} value={this.state.cvv} handleChange={this.handleChange} />
          <Input type={'text'} title={'Billing zip code'} name={'billingZip'} value={this.state.billingZip} handleChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default FormContainer3;