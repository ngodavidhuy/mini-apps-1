import Input from './Input.js';
import Button from './Button.js';

const Confirmation = (props) => {
    return (
      <div>
        <h1>Purchase Summary</h1>
        <ul>
          <li>Full Name: {props.purchaseInfo.name}</li>
          <li>Email: {props.purchaseInfo.email}</li>
          <li>Password: {props.purchaseInfo.password}</li>
          <li>Address Line 1: {props.purchaseInfo.address1}</li>
          <li>Address Line 2: {props.purchaseInfo.address2}</li>
          <li>City: {props.purchaseInfo.city}</li>
          <li>State: {props.purchaseInfo.state}</li>
          <li>Zip: {props.purchaseInfo.zip}</li>
          <li>Phone number: {props.purchaseInfo.phone}</li>
          <li>Card number: {props.purchaseInfo.cardNumber}</li>
          <li>Expiration: {props.purchaseInfo.expiration}</li>
          <li>CVV #: {props.purchaseInfo.cvv}</li>
          <li>Billing zip: {props.purchaseInfo.billingZip}</li>
        </ul>
        <Button className="confirmButton" handleNext={props.handleNext} buttonName={'Purchase!'} />
      </div>
    );
}

export default Confirmation;