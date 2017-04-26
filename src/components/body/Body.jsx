import React, {Component} from 'react';
import './Body.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const BodyInstance = () =>
<Grid className="bd">
  <h2>ANNONCES</h2>
  <Row className="show-grid" id="bck">
    <Col xs={6} md={2}>
      <p>
        <Button className="btns" bsStyle="primary">Stage</Button>&nbsp;
      </p>
    </Col>
    <Col xs={6} md={3}>
      <h4>INTEGRATEUR</h4>
      <p>Pantin</p>
    </Col>
    <Col xs={6} md={5}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Col>
    <Col xs md={2}>
      <p>
        <Button className="btnp" bsStyle="warning">Postuler</Button>&nbsp;
      </p>
    </Col>
  </Row>
  <Row className="show-grid">
    <Col xs={6} md={2}>
      <p>
        <Button className="btns" bsStyle="primary">CDD</Button>&nbsp;
      </p>
    </Col>
    <Col xs={6} md={3}>
      <h4>DEVELOPPEUR FULLSTACK JAVASCRIPT</h4>
      <p>Bordeaux</p>
    </Col>
    <Col xs={6} md={5}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Col>
    <Col xs md={2}>
      <p>
        <Button className="btnp" bsStyle="warning">Postuler</Button>&nbsp;
      </p>
    </Col>
  </Row>
  <Row className="show-grid" id="bck">
    <Col xs={6} md={2}>
      <p>
        <Button className="btns" bsStyle="primary">CDI</Button>&nbsp;
      </p>
    </Col>
    <Col xs={6} md={3}>
      <h4>DEVELOPPEUR FRONT-END</h4>
      <p>Paris</p>
    </Col>
    <Col xs={6} md={5}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Col>
    <Col xs md={2}>
      <p>
        <Button className="btnp" bsStyle="warning">Postuler</Button>&nbsp;
      </p>
    </Col>
  </Row>
  <Button className="btnm" bsStyle="primary">Voir plus d'annones</Button>
</Grid>
export default BodyInstance;
