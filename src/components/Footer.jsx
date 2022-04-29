import React from 'react';
import '../css/Footer.css';
import card from '../images/footer.png';
import pagseguro from '../images/pag.png';

export default function Footer() {
  return (
    <div className="Footer">
      <img className="card" src={ card } alt="card" />
      <img className="pagseguro" src={ pagseguro } alt="pagseguro" />
    </div>
  );
}
