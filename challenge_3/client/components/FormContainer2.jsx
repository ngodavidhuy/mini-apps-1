import Input from './Input.js';
import Button from './Button.js';

const FormContainer2 = (props) => {
    return (
      <div>
        <h1>FORM 2</h1>
        <form>
          <Input type={'text'} title={'Address Line 1'} name={'address1'} value={props.address1} handleChange={props.handleChange} />
          <Input type={'text'} title={'Address Line 2'} name={'address2'} value={props.address2} handleChange={props.handleChange} />
          <Input type={'text'} title={'City'} name={'city'} value={props.city} handleChange={props.handleChange} />
          <Input type={'text'} title={'State'} name={'state'} value={props.state} handleChange={props.handleChange} />
          <Input type={'text'} title={'Zip'} name={'zip'} value={props.zip} handleChange={props.handleChange} />
          <Input type={'text'} title={'Phone number'} name={'phone'} value={props.phone} handleChange={props.handleChange} />
        </form>
        <Button className={'nextButton'} handleNext={props.handleNext} buttonName={'next'} type={'button'} />
      </div>
    );
}

export default FormContainer2;