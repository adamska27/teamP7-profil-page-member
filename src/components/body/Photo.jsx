import React, {Component} from 'react';
import './Photo.css';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

const GridInstance = () =>
<Grid>
  <Row className="show-grid">
    <Col xs={6} md={4}>
      <img src={require('../../../public/logo-couleur.png')} id="imgSimplon" />
    </Col>
    <Col xs={6} md={4}>
      <img src={require('../../../public/logo-couleur.png')} id="imgSimplon" />
    </Col>
    <Col xs md={4}>
      <img src={require('../../../public/logo-couleur.png')} id="imgSimplon" />
    </Col>
  </Row>
</Grid>
export default GridInstance;
