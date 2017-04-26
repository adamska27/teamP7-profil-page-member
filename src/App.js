import React, { Component } from 'react';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import BodyInstance from './components/body/Body.jsx';
import GridInstance from './components/footerPublic/grid.jsx';
import ProfilPhoto from './components/ProfilPhoto/ProfilPhoto.jsx';
import logo from '../public/logo-couleur.png';
import FormUpdateProfilPhoto from './components/Form/FormUpdateProfilPhoto.jsx';
import ChangeProfilPicture from './components/Form/ChangeProfilPicture.jsx';
import Skills from './components/Skills/Skills.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: {display: 'none'},
      data: []
    }
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
        <ProfilPhoto source={logo} alt="logo" onclick={this.openForm} />
        <BodyInstance />
      <Skills />
      <ul>
        {
          this.state.data.map( item =>
          <a href={`/find/${item.id}`}><li>{item.nom}</li></a>
         )
       }
      </ul>
      <button onClick={this.getAPI}></button>
      <GridInstance />
      </div>
    );
  }
}

export default App;
