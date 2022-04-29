import React from 'react';
import thanks from '../images/thankyou.png';
import '../css/Finish.css';

export default function Finish() {
  return (
    <div className="Finish">
      <div className="finish-content">
        <h1>Obrigado por testar a aplicação</h1>
        <img src={ thanks } alt="Obrigado por usar a aplicação" />
      </div>
    </div>
  );
}
