import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard(props) {
  const { productName, productPrice, productImage } = props;
  return (
    <div>
      <img src={ productImage } alt={ productName } />
      <h2>{productName}</h2>
      <h3>{`R$ ${productPrice}`}</h3>
    </div>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
};
