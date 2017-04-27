import React, { Component } from 'react';
require("react-bootstrap/lib/ModalHeader");
import './Form.css';
import {Popover} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {OverlayTrigger} from 'react-bootstrap';
import FormUpdateProfilPhoto from './FormUpdateProfilPhoto.jsx';
import UpdateButton from '../Buttons/UpdateButton.jsx';


const FormUpdate = React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <UpdateButton onclick={this.open} style={this.props.style}/>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormUpdateProfilPhoto legend={this.props.legend}/>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" name="submit">Valider</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});
export default FormUpdate;
