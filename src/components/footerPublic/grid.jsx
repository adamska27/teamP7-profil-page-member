import React, {Component} from 'react';
import './grid.css';
import {grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import {ListGroupItem} from 'react-bootstrap';
import {alertClicked} from 'react-bootstrap';
import {logogris} from '../../../public/logo_gris.png';


const GridInstance = () =>
<grid>
  <Row className="show-grid">
      <Col md={6} mdPush={6}>
        <div className="options">
          <ul>
            <li><a href="#">Connexion</a></li>
            <li><a href="">Inscription</a></li>
            <li><a href="">Voir les Apprenants</a></li>
            <li><a href="">Voir toutes les offres d'emploi</a></li>
            <li><a href="">Qui sommes nous</a></li>
            <li><a href="">Simplon.co</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
      </Col>
      <Col md={6} mdPull={6}>
        <div className="discription">
          <img src={require('../../../public/logo_gris.png')} id="logogris"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </Col>
  </Row>
</grid>
export default GridInstance;
