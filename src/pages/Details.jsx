import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { getDescription, getProduct } from '../services/API';
import MercadoContext from '../context/MercadoContext';
import '../css/Details.css';
import logo from '../images/logo.png';
import shop from '../images/shop.png';
import Footer from '../components/Footer';

export default function Details(props) {
  const [product, setProduct] = useState({});
  const [description, setDescription] = useState('');
  const { cart, cartItem } = useContext(MercadoContext);
  const history = useHistory();

  const teste = async () => {
    const { match } = props;
    const { id } = match.params;
    setProduct(await getProduct(id));
    setDescription(await getDescription(id));
  };

  const buyButton = async () => {
    const { match } = props;
    const { id } = match.params;

    const item = {
      name: product.title,
      img: product.thumbnail,
      price: product.price,
      id,
      quantity: 1,
    };

    cart(item);

    history.push('/');
  };

  const cartButton = async () => {
    const { match } = props;
    const { id } = match.params;

    const item = {
      name: product.title,
      img: product.thumbnail,
      price: product.price,
      id,
      quantity: 1,
    };

    cart(item);

    history.push('/cart');
  };

  useEffect(() => {
    teste();
  }, []);

  console.log(cartItem);

  return (
    <div className="details-container">
      <div className="details-header">
        <button className="button-logo" type="button" onClick={ () => history.push('/') }>
          <img className="aaa" src={ logo } alt="logo" />
        </button>
        <div className="items-number">
          <button
            className="button-cart-logo"
            type="button"
            onClick={ () => history.push('/cart') }
          >
            <img className="shop" src={ shop } alt="cart" />
            <p>{cartItem.length}</p>
          </button>
        </div>
      </div>
      <div className="main-content">
        <div className="panel">
          <div className="gallery">
            {
              product.pictures && (
                <img src={ product.pictures[0].url } alt={ product.title } />
              )
            }
          </div>
          <div className="description">
            <h2>Descrição</h2>
            {
              description ? (
                <p>{description}</p>
              ) : (
                <h3>
                  Infelizmente não foi adicionado uma descrição para este produto.
                </h3>
              )
            }
          </div>
        </div>
        <div className="info">
          <h2 className>{ product.title }</h2>
          <div className="details-info">
            {
              product.warranty ? (
                <h3>{product.warranty}</h3>
              ) : (
                <h3>Produto não possui garantia</h3>
              )
            }
            <h3>{`Valor: R$ ${product.price}`}</h3>
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
            <a target="_blank" href={ product.permalink } rel="noreferrer">
              Clique aqui e vá para o site oficial
            </a>
          </div>
          <div className="button-container">
            <button type="button" onClick={ buyButton }>
              Adicionar ao carrinho e continuar comprando
            </button>
            <button type="button" onClick={ cartButton }>
              Adicionar ao carrinho e finalizar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};
