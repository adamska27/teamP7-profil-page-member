import React from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';

const FormUpdateProfilPhoto = (props) =>
  <form>
    <p style={props.display}>
      <fieldset>
        <legend>Mettre à jour votre photo de profil : </legend>
        <input type="file" name="porfolioImg"/>
      </fieldset>
    </p>
  </form>
;

export default FormUpdateProfilPhoto;
