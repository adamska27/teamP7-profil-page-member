import React, { Component } from 'react';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import ProfilPhoto from './components/ProfilPhoto/ProfilPhoto.jsx';
import logo from '../public/logo-couleur.png';
import FormUpdateProfilPhoto from './components/Form/FormUpdateProfilPhoto.jsx';
import ChangeProfilPicture from './components/Form/ChangeProfilPicture.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {display: 'none'},
    }
  }



  render() {
    return (
      <div className="App">
        <NavbarInstance />
        <ProfilPhoto source={logo} alt="logo" onclick={this.openForm} />
      </div>
    );
  }
}

export default App;
