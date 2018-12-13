import Input from './Input.js';

class FormContainer2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit() {

  }

  handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    // console.log(value, name);
    this.setState(prevState => {
      return prevState[name] = value;
    });
  }

  render() {
    return (
      <div>
        <h1>FORM 2</h1>
        <form>
          <Input type={'text'} title={'Address Line 1'} name={'address1'} value={this.state.address1} handleChange={this.handleChange} />
          <Input type={'text'} title={'Address Line 2'} name={'address2'} value={this.state.address2} handleChange={this.handleChange} />
          <Input type={'text'} title={'City'} name={'city'} value={this.state.city} handleChange={this.handleChange} />
          <Input type={'text'} title={'State'} name={'state'} value={this.state.state} handleChange={this.handleChange} />
          <Input type={'text'} title={'Zip'} name={'zip'} value={this.state.zip} handleChange={this.handleChange} />
          <Input type={'text'} title={'Phone number'} name={'phone'} value={this.state.phone} handleChange={this.handleChange} />
        </form>
        <button>next</button>
      </div>
    );
  }
}

export default FormContainer2;