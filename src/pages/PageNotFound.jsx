import React from 'react';
import notFound from '../images/notFound.png';
import '../css/PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="not-found">
      <img src={ notFound } alt="Página não encontrada" />
    </div>
  );
}
