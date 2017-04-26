import React from 'react';
import CloseButton from '../Buttons/CloseButton.jsx';

const FormUpdateProfilPhoto = (props) =>
  <form method="post" action="/post">
    <p style={props.display}>
      <CloseButton onclick={props.onclick}/>
      <fieldset>
        <legend>Mettre à jour votre photo de profil : </legend>
        <input type="text" name="prenom"/>
        <input type="text" name="nom"/>
        <input type="text" name="skills"/>
        <input type="url" name="image"/>
        <button type="submit"></button>
      </fieldset>
    </p>
  </form>
;

export default FormUpdateProfilPhoto;
