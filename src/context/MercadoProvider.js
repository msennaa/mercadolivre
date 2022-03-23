import React from 'react';
import PropTypes from 'prop-types';
import MercadoContext from './MercadoContext';

export default function MercadoProvider({ children }) {
  const store = {
    oi: 'oi',
  };

  return (
    <MercadoContext.Provider value={ store }>
      {children}
    </MercadoContext.Provider>
  );
}

MercadoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
