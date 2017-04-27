import React from 'react';
import FontAwesome from 'react-fontawesome';

const UpdateButton = (props) =>
  <a onClick={props.onclick}>
    <FontAwesome
    className='button-update'
    name='plus-circle'
    size='3x'
    style={props.style}
    />
  </a>
;

export default UpdateButton;
