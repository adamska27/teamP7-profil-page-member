import React, {Component} from 'react';
import './Dispo.css';
import {form} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {option} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

const FormInstance = () =>
<form>
  <FormGroup controlId="formControlsSelect">
    <ControlLabel>DISPONIBILITE</ControlLabel>
    <FormControl componentClass="select" placeholder="select">
      <option value="select">DISPONIBLE</option>
      <option value="other">INDISPONIBLE</option>
    </FormControl>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Github
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Add your url" />
    </Col>
  </FormGroup>
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
</form>
export default FormInstance;
