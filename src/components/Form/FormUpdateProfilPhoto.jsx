import React from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';

const FormUpdateProfilPhoto = (props) =>
  <form method="" action="">
    <p style={props.display}>
      <CloseButton onclick={props.onclick}/>
      <fieldset>
        <legend>Mettre à jour votre photo de profil : </legend>
        <input type="url" name="porfolioImg"/>
        <input type="submit" name="submit" value="Vaider"/>
      </fieldset>
    </p>
  </form>
;

export default FormUpdateProfilPhoto;
