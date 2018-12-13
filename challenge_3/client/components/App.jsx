import FormContainer1 from './FormContainer1.js';
import FormContainer2 from './FormContainer2.js';
import FormContainer3 from './FormContainer3.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageQueue: []
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1>React Form</h1>
        <button>Checkout</button>
        <FormContainer1 />
        <FormContainer2 />
        <FormContainer3 />
      </div>
    );
  }
}

export default App;

