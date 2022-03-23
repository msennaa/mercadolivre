import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  const { productName, productPrice, productImage, productId } = props;
  return (
    <Link to={ productId }>
      <img src={ productImage } alt={ productName } />
      <h2>{productName}</h2>
      <h3>{`R$ ${productPrice}`}</h3>
    </Link>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
};
