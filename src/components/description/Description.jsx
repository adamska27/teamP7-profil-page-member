import React from 'react';

const Description = (props) =>
  <div style={{ textAlign: 'center', margin: '50px', fontSize: '1.3em'}}>
    <p>
      {props.description}
    </p>
  </div>
;

export default Description;
