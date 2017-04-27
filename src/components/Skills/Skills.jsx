import React from 'react';
import FontAwesome from 'react-fontawesome';
import UpdateButton from '../Buttons/UpdateButton.jsx';
import FormUpdate from '../Form/FormUpdate.jsx';

const Skills = (props) =>
  <div style={{width: '250px', position: 'relative'}}>
    <FormUpdate title="Ajouter/supprimer skills : " style={{position: 'absolute', top: '-30px', right:'0px'}} legend="Ajouter / Supprimer skills"/>
    <h2>
        <FontAwesome
            className='skills-icon'
            name='wrench'
            size='1x'
            style={props.style}
        />
        Mes Skills :
    </h2>
    <ul>
      {props.data.map((item) =>
        <li>{item}</li>
      )}
    </ul>
  </div>
;

export default Skills;
