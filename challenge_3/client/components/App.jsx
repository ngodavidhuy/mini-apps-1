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
    }

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
    return (
      <div className="main-container">

        <h1>React Form</h1>
        
        <button>Checkout</button>

        <FormContainer1 handleChange={this.handleChange} name={this.state.name} email={this.state.email} password={this.state.password}/>

        <FormContainer2 handleChange={this.handleChange} address1={this.state.address1} address2={this.state.address2} 
        city={this.state.city} state={this.state.state} zip={this.state.zip} phone={this.state.phone}/>

        <FormContainer3 handleChange={this.handleChange} cardNumber={this.state.cardNumber} expiration={this.state.expiration} 
        cvv={this.state.cvv} billingZip={this.state.billingZip}/>

      </div>
    );
  }
}

export default App;

