import React from 'react';
import './Form.css';
import InputCheckbox from './InputCheckbox';

const Form = () =>
  <form method="put" action="" enctype="multipart/form-data">

    <p>
      <fieldset>
        <legend>VOS COMPETENCES</legend>

        <label>Cochez vos compétences : </label>

          <div className="form-content-skills">
            <div>
              <InputCheckbox name="html" id="html" labelValue="HTML5" />
              <InputCheckbox name="css" id="css" labelValue="CSS" />
              <InputCheckbox name="javascript" id="javascript" labelValue="Javascript" />
            </div>

            <div>
              <InputCheckbox name="react" id="react" labelValue="React" />
              <InputCheckbox name="angular" id="angular" labelValue="Angular" />
              <InputCheckbox name="nodejs" id="nodejs" labelValue="NodeJS" />
            </div>

            <div>
              <InputCheckbox name="mongodb" id="mongodb" labelValue="MongoDB" />
              <InputCheckbox name="postgresql" id="postgresql" labelValue="PostgreSQL" />
              <InputCheckbox name="bootstrap" id="bootstrap" labelValue="Bootstrap" />
            </div>

            <div>
              <InputCheckbox name="scrum" id="scrum" labelValue="SCRUM" />
              <InputCheckbox name="git" id="git" labelValue="GIT" />
              <InputCheckbox name="linux" id="linux" labelValue="Linux" />
            </div>
          </div>
      </fieldset>
    </p>

    <p>
      <fieldset>
        <legend>VOTRE DISPONIBILITE</legend>

        <label for="availability">Êtes-vous disponible dès maintenant : </label>

        <select name="availability" id="availability">
          <option value="available">Disponible</option>
          <option value="unavailable">Indisponible</option>
        </select>
      </fieldset>
    </p>

    <p>
      <fieldset>
        <legend>Mettre à jour votre porfolio : </legend>
        <input type="file" name="porfolioImg"/>
      </fieldset>
    </p>

    <input type="submit" value="Valider"/>
  </form>
;

export default Form;
