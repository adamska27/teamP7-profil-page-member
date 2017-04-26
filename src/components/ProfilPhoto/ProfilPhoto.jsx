import React from 'react';
import './ProfilPhoto.css';
import ChangeProfilPicture from '../Form/ChangeProfilPicture.jsx';

const ProfilPhoto = (props) =>
  <div className="photo-content">
    <img src={props.source} alt={props.alt} />
    <ChangeProfilPicture/>
  </div>
;

export default ProfilPhoto;
