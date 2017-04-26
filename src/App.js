import React, { Component } from 'react';
import Form from './components/Form/Form.jsx';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import GridInstance from './components/footerPublic/grid.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarInstance />
        <Form />
        <GridInstance />
      </div>
    );
  }
}

export default App;
