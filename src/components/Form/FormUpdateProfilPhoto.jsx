import React from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';
import {Button} from 'react-bootstrap';

const FormUpdateProfilPhoto = (props) =>
  <form style={{textAlign:'center'}} method="put" action=""
    <p style={props.display}>
      <fieldset>
        <legend>{props.legend}</legend>
        <input type="url" name="porfolioImg"/>
        <Button style={{marginTop:'6%'}}type="submit" name="submit">Valider</Button>
      </fieldset>
    </p>
  </form>
;

export default FormUpdateProfilPhoto;
