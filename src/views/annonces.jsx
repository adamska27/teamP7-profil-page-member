import React from 'react';
import BodyInstance from '../components/body/Body.jsx';
import NavbarInstance from '../components/HeaderPublic/Navbar.jsx';
import GridInstance from '../components/footerPublic/grid.jsx';


class Annonces extends React.Component {

  render() {
    return (
      <div>
        <NavbarInstance />
        <BodyInstance />
        <GridInstance />
      </div>
    );
  }

}

export default Annonces;
