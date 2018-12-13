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
    }

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
      form = <Button handleNext={this.handleNext} buttonName={'Checkout'} />;
    } else if (currentView === 1) {
      form = <FormContainer1 handleChange={this.handleChange} handleNext={this.handleNext} name={this.state.name} email={this.state.email} password={this.state.password} />;
    } else if (currentView === 2) {
      form = <FormContainer2 handleChange={this.handleChange} handleNext={this.handleNext} address1={this.state.address1} address2={this.state.address2} 
              city={this.state.city} state={this.state.state} zip={this.state.zip} phone={this.state.phone} />;
    } else if (currentView === 3) {
      form = <FormContainer3 handleChange={this.handleChange} handleNext={this.handleNext} cardNumber={this.state.cardNumber} expiration={this.state.expiration} 
              cvv={this.state.cvv} billingZip={this.state.billingZip} />;
    } else if (currentView === 4) {
      form = <Confirmation purchaseInfo={this.state} handleNext={this.handleNext}/>
    }

    return (
      <div className="main-container">
        <h1>React Form</h1>
        {form}
      </div>
    );
  }
}

export default App;

