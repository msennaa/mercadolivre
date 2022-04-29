import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MercadoContext from './MercadoContext';

export default function MercadoProvider({ children }) {
  const [cartItem, setCartItems] = useState([]);

  const cart = (item) => {
    const alreadyExists = cartItem.some((array) => array.id === item.id);

    if (alreadyExists) {
      const excludeItems = cartItem.filter((array) => array.id !== item.id);
      const findItem = cartItem.find((array) => array.id === item.id);
      findItem.quantity += 1;
      return setCartItems([...excludeItems, findItem]);
    }

    setCartItems([...cartItem, item]);
  };

  const store = {
    cart,
    cartItem,
    setCartItems,
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
