import React from 'react';
import './ProfilPhoto.css';
import FormUpdate from '../Form/FormUpdate.jsx';

const ProfilPhoto = (props) =>
  <div className="photo-content">
    <img src={props.source} alt={props.alt} />
    <FormUpdate title="Modifier sa photo de profil" style={{ position: 'absolute', top: '0', right:'100px'}} legend="Entrez l'url de votre image de profil"/>
  </div>
;

export default ProfilPhoto;
