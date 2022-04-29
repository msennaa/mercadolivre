import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MercadoContext from '../context/MercadoContext';
import Footer from '../components/Footer';
import logo from '../images/logo.png';
import '../css/cart.css';

const minToBuy = 0.01;

export default function Cart() {
  const { cartItem, setCartItems } = useContext(MercadoContext);
  const [allPrice, setAllPrices] = useState([]);
  const history = useHistory();

  console.log(cartItem);

  const getAllPrices = () => {
    const result = cartItem.map((item) => item.price * item.quantity);
    const finishPrice = result.reduce((acc, curr) => acc + curr, 0);
    setAllPrices(finishPrice.toFixed(2));
  };

  const excludeProduct = (id) => {
    const result = cartItem.filter((item) => item.id !== id);
    setCartItems(result);
    return getAllPrices();
  };

  useEffect(() => {
    getAllPrices();
  }, [cartItem]);

  console.log(allPrice);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <button onClick={ () => history.push('/') } className="logo-button" type="button">
          <img src={ logo } alt="logo" />
        </button>
        <button onClick={ () => history.push('/') } className="main-button" type="button">
          Continuar comprando
        </button>
      </div>
      <div className="cart-list">
        {
          cartItem.length === 0 ? (
            <h3 className="empty-cart">Seu carrinho ainda está vazio 🥺🥺🥺</h3>
          ) : (
            cartItem.map((item, index) => (
              <div className="cart-item-page" key={ index }>
                <img src={ item.img } alt={ item.name } />
                <h3>{`${item.quantity}x ${item.name}`}</h3>
                <div className="exclude-div">
                  <button onClick={ () => excludeProduct(item.id) } type="button">
                    X
                  </button>
                  <p>{`valor: R$ ${item.price * item.quantity}`}</p>
                </div>
              </div>
            ))
          )
        }
      </div>
      {
        allPrice < minToBuy ? (
          <br />
        ) : (
          <div className="finish-shop">
            <h1>{`Valor total: ${allPrice}`}</h1>
            <button
              type="button"
              className="finish-button"
              onClick={ () => history.push('/done') }
            >
              Finalizar compra
            </button>
          </div>
        )
      }
      <Footer />
    </div>
  );
}
