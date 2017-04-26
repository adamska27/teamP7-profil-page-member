import React from 'react';
import './ProfilPhoto.css';
import UpdateButton from '../Buttons/UpdateButton.jsx';

const ProfilPhoto = (props) =>
  <div className="photo-content">
    <img src={props.source} alt={props.alt} />
    <UpdateButton href="#" onclick={props.onclick}/>
  </div>
;

export default ProfilPhoto;
