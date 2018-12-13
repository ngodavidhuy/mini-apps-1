import Input from './Input.js';

class FormContainer1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

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
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'FORM 1'
      ),
      React.createElement(
        'form',
        null,
        React.createElement(Input, { type: 'text', title: 'Full Name', name: 'name', value: this.state.name, handleChange: this.handleChange, placeholder: 'Enter Name Here' }),
        React.createElement(Input, { type: 'email', title: 'Email', name: 'email', value: this.state.email, handleChange: this.handleChange, placeholder: 'Enter Email Here' }),
        React.createElement(Input, { type: 'password', title: 'Password', name: 'password', value: this.state.password, handleChange: this.handleChange, placeholder: 'Enter Password Here' })
      ),
      React.createElement(
        'button',
        null,
        'next'
      )
    );
  }
}

export default FormContainer1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0Zvcm1Db250YWluZXIxLmpzeCJdLCJuYW1lcyI6WyJJbnB1dCIsIkZvcm1Db250YWluZXIxIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixZQUFsQjs7QUFFQSxNQUFNQyxjQUFOLFNBQTZCQyxNQUFNQyxTQUFuQyxDQUE2QztBQUMzQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1RDLFlBQU0sRUFERztBQUVUQyxhQUFPLEVBRkU7QUFHVEMsZ0JBQVU7QUFIRCxLQUFiOztBQU1BLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREQsZUFBYUUsQ0FBYixFQUFnQjtBQUNkLFFBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0QsS0FBckI7QUFDQSxRQUFJTixPQUFPSyxFQUFFRSxNQUFGLENBQVNQLElBQXBCO0FBQ0E7QUFDQSxTQUFLUSxRQUFMLENBQWNDLGFBQWE7QUFDekIsYUFBT0EsVUFBVVQsSUFBVixJQUFrQk0sS0FBekI7QUFDRCxLQUZEO0FBR0Q7O0FBRURJLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLEtBQUQsSUFBTyxNQUFNLE1BQWIsRUFBcUIsT0FBTyxXQUE1QixFQUF5QyxNQUFNLE1BQS9DLEVBQXVELE9BQU8sS0FBS1gsS0FBTCxDQUFXQyxJQUF6RSxFQUErRSxjQUFjLEtBQUtHLFlBQWxHLEVBQWdILGFBQWEsaUJBQTdILEdBREY7QUFFRSw0QkFBQyxLQUFELElBQU8sTUFBTSxPQUFiLEVBQXNCLE9BQU8sT0FBN0IsRUFBc0MsTUFBTSxPQUE1QyxFQUFxRCxPQUFPLEtBQUtKLEtBQUwsQ0FBV0UsS0FBdkUsRUFBOEUsY0FBYyxLQUFLRSxZQUFqRyxFQUErRyxhQUFhLGtCQUE1SCxHQUZGO0FBR0UsNEJBQUMsS0FBRCxJQUFPLE1BQU0sVUFBYixFQUF5QixPQUFPLFVBQWhDLEVBQTRDLE1BQU0sVUFBbEQsRUFBOEQsT0FBTyxLQUFLSixLQUFMLENBQVdHLFFBQWhGLEVBQTBGLGNBQWMsS0FBS0MsWUFBN0csRUFBMkgsYUFBYSxxQkFBeEk7QUFIRixPQUZGO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGLEtBREY7QUFXRDtBQWpDMEM7O0FBb0M3QyxlQUFlVCxjQUFmIiwiZmlsZSI6IkZvcm1Db250YWluZXIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQuanMnO1xuXG5jbGFzcyBGb3JtQ29udGFpbmVyMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCBuYW1lKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4gcHJldlN0YXRlW25hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5GT1JNIDE8L2gxPlxuICAgICAgICA8Zm9ybT5cbiAgICAgICAgICA8SW5wdXQgdHlwZT17J3RleHQnfSB0aXRsZT17J0Z1bGwgTmFtZSd9IG5hbWU9eyduYW1lJ30gdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9eydFbnRlciBOYW1lIEhlcmUnfSAvPlxuICAgICAgICAgIDxJbnB1dCB0eXBlPXsnZW1haWwnfSB0aXRsZT17J0VtYWlsJ30gbmFtZT17J2VtYWlsJ30gdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHBsYWNlaG9sZGVyPXsnRW50ZXIgRW1haWwgSGVyZSd9IC8+XG4gICAgICAgICAgPElucHV0IHR5cGU9eydwYXNzd29yZCd9IHRpdGxlPXsnUGFzc3dvcmQnfSBuYW1lPXsncGFzc3dvcmQnfSB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9eydFbnRlciBQYXNzd29yZCBIZXJlJ30gLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uPm5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRhaW5lcjE7Il19