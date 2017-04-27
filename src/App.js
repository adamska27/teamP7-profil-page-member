import React, { Component } from 'react';
import './App.css';
import NavbarInstance from './components/HeaderPublic/Navbar.jsx';
import GridInstance from './components/footerPublic/grid.jsx';
import ProfilPhoto from './components/ProfilPhoto/ProfilPhoto.jsx';
import Profile from '../public/profile.jpg';
import FormUpdateProfilPhoto from './components/Form/FormUpdateProfilPhoto.jsx';
import Skills from './components/Skills/Skills.jsx';
import Description from './components/description/Description.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"nom": "adams",
              "image": "image",
              "description": "Bonjour, je suis Adams, je suis apprenant à Simplon.co",
              "skills": "html, css, javascript"
            }],
      id: this.props.match.params.id
    }
  }

  componentDidMount() {
    fetch(`${window.location.origin}/api/${this.state.id}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      this.setState({
        data: json
      })
      console.log("data",this.state.data);
    });
  }

  renderProfile = () => {
    return this.state.data.map( (item) => {
      return ( <p>{item.nom} </p>);
    });
  }


  render() {
    console.log(this.state.id);
    console.log(this.state.data);

    let profile = this.renderProfile();

    return (
      <div className="App">
        <NavbarInstance />

        <h1>Bienvenue sur ton profil {profile}</h1>

        <ProfilPhoto source={Profile} alt={this.state.data[0].image} />

        <Description description={this.state.data[0].description} />

        <Skills data={this.state.data[0].skills.split(',')} style={{padding: '10px'}}/>
        <h1>{this.state.data[0].prenom}</h1>

      </div>
    );
  }
}

export default App;
