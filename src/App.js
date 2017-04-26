import React, { Component } from 'react';
import Form from './components/Form/Form.jsx';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import GridInstance from './components/body/Body.jsx';
import ProfilPhoto from './components/ProfilPhoto/ProfilPhoto.jsx';
import logo from '../public/logo-couleur.png';
import FormUpdateProfilPhoto from './components/Form/FormUpdateProfilPhoto.jsx';
import Skills from './components/Skills/Skills.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {display: 'none'},
      data: []
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

  getAPI = () => {
    fetch(`${window.location.origin}/users`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      this.setState({
        data: json

      })
         console.log("le data",this.state.data);


    });
  }


  render() {
    return (
      <div className="App">
        <NavbarInstance />
        {/* <Form /> */}
        <GridInstance />

        <ProfilPhoto source={logo} alt="logo" onclick={this.openForm} />

        <FormUpdateProfilPhoto  display={this.state.display} onclick={this.closeForm}/>

      <Skills />

      <button onClick={this.getAPI}></button>
      </div>
    );
  }
}

export default App;
