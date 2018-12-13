import Input from './Input.js';

const FormContainer1 = (props) => {
    return (
      <div>
        <h1>FORM 1</h1>
        <form>
          <Input type={'text'} title={'Full Name'} name={'name'} value={props.name} handleChange={props.handleChange} placeholder={'Enter Name Here'} />
          <Input type={'email'} title={'Email'} name={'email'} value={props.email} handleChange={props.handleChange} placeholder={'Enter Email Here'} />
          <Input type={'password'} title={'Password'} name={'password'} value={props.password} handleChange={props.handleChange} placeholder={'Enter Password Here'} />
        </form>
        <button>next</button>
      </div>
    );
}

export default FormContainer1;