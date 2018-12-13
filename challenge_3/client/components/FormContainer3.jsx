import Input from './Input.js';
import Button from './Button.js';

const FormContainer3 = (props) => {
    return (
      <div>
        <h1>FORM 3</h1>
        <form>
          <Input type={'text'} title={'Card number'} name={'cardNumber'} value={props.cardNumber} handleChange={props.handleChange} />
          <Input type={'text'} title={'Expiration date'} name={'expiration'} value={props.expiration} handleChange={props.handleChange} />
          <Input type={'text'} title={'CVV'} name={'cvv'} value={props.cvv} handleChange={props.handleChange} />
          <Input type={'text'} title={'Billing zip code'} name={'billingZip'} value={props.billingZip} handleChange={props.handleChange} />
        </form>
        <Button className="confirmButton" handleNext={props.handleNext} buttonName={'Confirm Purchase!'} />
      </div>
    );
}

export default FormContainer3;