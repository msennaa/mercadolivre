/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import getProductsList, { getCategories, getProductsByCategories } from '../services/API';
import logo from '../images/logo.png';
import cart from '../images/cart.png';
import shop from '../images/shop.png';
import '../css/Main.css';
import MercadoContext from '../context/MercadoContext';

export default function Main() {
  const [productList, setProductList] = useState([]);
  const [productInput, setProductInput] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const { cartItem } = useContext(MercadoContext);
  const history = useHistory();

  const allProducts = async () => {
    setProductList(await getProductsList(productInput));
  };

  const teste = async () => {
    setCategoriesList(await getCategories());
  };

  const productsByCategory = async (id) => {
    const response = await getProductsByCategories(id);
    return setProductList(response);
  };

  useEffect(() => {
    teste();
  }, []);

  console.log(productList);

  return (
    <div>
      <div className="header">
        <div className="nav-bar">
          <img src={ logo } alt="logo" />
          <div className="search-bar">
            <input
              type="text"
              value={ productInput }
              onChange={ ({ target: { value } }) => setProductInput(value) }
            />
            <button type="button" onClick={ allProducts }>
              Pesquisar
            </button>
          </div>
          <div className="div-cart-main">
            <button
              className="button-cart-main"
              type="button"
              onClick={ () => history.push('/cart') }
            >
              <img className="img-cart-main" src={ shop } alt="cart" />
              <p>{cartItem.length}</p>
            </button>
          </div>
        </div>
        <div className="categories-container">
          <h2>Categorias</h2>
          <ul className="category-list">
            {
              categoriesList && categoriesList.map((category, index) => (
                <button
                  className="category-item"
                  onClick={ () => productsByCategory(category.id) }
                  type="button"
                  key={ index }
                >
                  {category.name}
                </button>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="product-container">
        {
          productList.length > 0 ? (
            productList.map((product, index) => (
              <ProductCard
                key={ index }
                productName={ product.title }
                productPrice={ product.price }
                productImage={ product.thumbnail }
                productId={ product.id }
                frete={ product.shipping.free_shipping }
              />
            ))
          ) : (
            <div className="info">
              <h1>Pesquise seu produto</h1>
              <img src={ cart } alt="carrinho" />
            </div>
          )
        }
      </div>
    </div>
  );
}
