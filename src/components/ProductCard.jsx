import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/ProductCard.css';

export default function ProductCard(props) {
  const { productName, productPrice, productImage, productId, frete } = props;

  console.log(frete);

  return (
    <Link className="product-card" to={ `/product/${productId}` }>
      <img className="product-image" src={ productImage } alt={ productName } />
      <h4 className="product-name">{productName}</h4>
      <p className="product-price">{`Preço: R$ ${(productPrice).toFixed(2)}`}</p>
      {
        frete && (
          <p className="frete">Frete grátis</p>
        )
      }
    </Link>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productImage: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  frete: PropTypes.bool.isRequired,
};
