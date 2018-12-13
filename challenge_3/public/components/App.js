import FormContainer1 from './FormContainer1.js';
import FormContainer2 from './FormContainer2.js';
import FormContainer3 from './FormContainer3.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageQueue: []
    };
  }

  render() {
    return React.createElement(
      'div',
      { className: 'main-container' },
      React.createElement(
        'h1',
        null,
        'React Form'
      ),
      React.createElement(
        'button',
        null,
        'Checkout'
      ),
      React.createElement(FormContainer1, null),
      React.createElement(FormContainer2, null),
      React.createElement(FormContainer3, null)
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiRm9ybUNvbnRhaW5lcjEiLCJGb3JtQ29udGFpbmVyMiIsIkZvcm1Db250YWluZXIzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJwYWdlUXVldWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLGNBQVAsTUFBMkIscUJBQTNCO0FBQ0EsT0FBT0MsY0FBUCxNQUEyQixxQkFBM0I7QUFDQSxPQUFPQyxjQUFQLE1BQTJCLHFCQUEzQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFXO0FBREEsS0FBYjtBQUdEOztBQUVEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsY0FBRCxPQUhGO0FBSUUsMEJBQUMsY0FBRCxPQUpGO0FBS0UsMEJBQUMsY0FBRDtBQUxGLEtBREY7QUFTRDtBQWxCK0I7O0FBcUJsQyxlQUFlUCxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtQ29udGFpbmVyMSBmcm9tICcuL0Zvcm1Db250YWluZXIxLmpzJztcbmltcG9ydCBGb3JtQ29udGFpbmVyMiBmcm9tICcuL0Zvcm1Db250YWluZXIyLmpzJztcbmltcG9ydCBGb3JtQ29udGFpbmVyMyBmcm9tICcuL0Zvcm1Db250YWluZXIzLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2VRdWV1ZTogW11cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGgxPlJlYWN0IEZvcm08L2gxPlxuICAgICAgICA8YnV0dG9uPkNoZWNrb3V0PC9idXR0b24+XG4gICAgICAgIDxGb3JtQ29udGFpbmVyMSAvPlxuICAgICAgICA8Rm9ybUNvbnRhaW5lcjIgLz5cbiAgICAgICAgPEZvcm1Db250YWluZXIzIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuIl19