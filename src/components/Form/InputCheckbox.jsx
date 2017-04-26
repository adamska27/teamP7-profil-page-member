import React from 'react';

const InputCheckbox = (props) =>
  <p>
    <input type="checkbox" name={props.name} id={props.id} />
    <label>{props.labelValue}</label>
  </p>
;

export default InputCheckbox;
