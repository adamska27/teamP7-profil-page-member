import React from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';

const FormUpdateProfilPhoto = (props) =>
  <form method="" action="">
    <p style={props.display}>
      <fieldset>
        <legend>{props.legend}</legend>
        <input type="url" name="porfolioImg"/>
      </fieldset>
    </p>
  </form>
;

export default FormUpdateProfilPhoto;
