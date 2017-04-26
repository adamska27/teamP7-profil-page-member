import React, {Component} from 'react';
import './Navbar.css';
import {Navbar} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import {logoCouleur} from '../../../public/logo-couleur.png';


const NavbarInstance = () =>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <img src={require('../../../public/logo-couleur.png')} id='logoSimplon'/>
      <Navbar.Brand>
        <a href="#">TeamP7</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Inscription</NavItem>
        <NavItem eventKey={2} href="#">Connexion</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
export default NavbarInstance;
