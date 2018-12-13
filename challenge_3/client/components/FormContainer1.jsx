import Input from './Input.js';

class FormContainer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        password: ''
    }

    this.handleChange = this.handleChange.bind(this);
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
        <h1>FORM 1</h1>
        <form>
          <Input type={'text'} title={'Full Name'} name={'name'} value={this.state.name} handleChange={this.handleChange} placeholder={'Enter Name Here'} />
          <Input type={'email'} title={'Email'} name={'email'} value={this.state.email} handleChange={this.handleChange} placeholder={'Enter Email Here'} />
          <Input type={'password'} title={'Password'} name={'password'} value={this.state.password} handleChange={this.handleChange} placeholder={'Enter Password Here'} />
        </form>
        <button>next</button>
      </div>
    );
  }
}

export default FormContainer1;