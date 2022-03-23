import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/API';

export default function Details(props) {
  const [product, setProduct] = useState({});

  const teste = async () => {
    const { match } = props;
    const { id } = match.params;
    setProduct(await getProduct(id));
  };

  useEffect(() => {
    teste();
  }, []);

  console.log(product);

  return (
    <div>
      <div>
        <img src={ product.thumbnail } alt={ product.title } />
        <div>
          <h3>{ product.title }</h3>
          <h3>{ product.warranty }</h3>
          <h3>{`R$ ${product.price}`}</h3>
          {
            product.accepts_mercadopago ? (
              <h3>Aceita mercado pago</h3>
            ) : <h3>Não aceita mercado pago</h3>
          }
          {
            product.available_quantity > 1 ? (
              <h3>{`Estoque: ${product.available_quantity} unidades`}</h3>
            ) : (
              <h3>{`Estoque: ${product.available_quantity} unidade`}</h3>
            )
          }
          <div>
            <button type="button">
              Comprar
            </button>
            <button type="button">
              Enviar para o carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
