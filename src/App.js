import React, { Component } from 'react';
import Form from './components/Form/Form.jsx';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import ProfilPhoto from './components/ProfilPhoto/ProfilPhoto.jsx';
import logo from '../public/logo-couleur.png';
import FormUpdateProfilPhoto from './components/Form/FormUpdateProfilPhoto.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {display: 'none'},
    }
  }

  openForm = (event) => {
    this.setState({
      display: {display: 'block'}
    });
  }

  closeForm = () => {
    this.setState({
      display: {display: 'none'}
    })
  }


  render() {
    return (
      <div className="App">
        <NavbarInstance />

        <ProfilPhoto source={logo} alt="logo" onclick={this.openForm} />

        <FormUpdateProfilPhoto  display={this.state.display} onclick={this.closeForm}/>
      </div>
    );
  }
}

export default App;
