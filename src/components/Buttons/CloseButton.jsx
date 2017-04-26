import React from 'react';
import FontAwesome from 'react-fontawesome';

const CloseButton = (props) =>
  <a onClick={props.onclick}>
    <FontAwesome
    className='button-close'
    name='times-circle'
    size='3x'
    />
  </a>
;

export default CloseButton;
