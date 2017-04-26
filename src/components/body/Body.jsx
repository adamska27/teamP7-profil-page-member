import React, {Component} from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Clearfix} from 'react-bootstrap';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
      <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
      <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
      <Col sm={6} md={4}><code>&lt;{'Col sm={6} md={4}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
    </Row>
  </Grid>
);

export default gridInstanceexport default NavbarInstance;export default NavbarInstance;export default NavbarInstance;export default NavbarInstance;;
