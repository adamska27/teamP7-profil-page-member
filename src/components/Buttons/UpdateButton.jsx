import React from 'react';
import FontAwesome from 'react-fontawesome';

const UpdateButton = (props) =>
  <a onClick={props.onclick}>
    <FontAwesome
    className='button-update'
    name='plus-circle'
    size='3x'
    style={{ position: 'relative', top: '-40px', left:'-25px'}}
    />
  </a>
;

export default UpdateButton;
