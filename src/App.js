import React, { Component } from 'react';
import Form from './components/Form/Form.jsx';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import gridInstance from './components/body/Body.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarInstance />
        <Form />
        <gridInstance />
      </div>
    );
  }
}

export default App;
