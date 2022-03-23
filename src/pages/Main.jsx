import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import getProductsList from '../services/API';

export default function Main() {
  const [productList, setProductList] = useState([]);
  const [productInput, setProductInput] = useState('');

  const teste = async () => {
    setProductList(await getProductsList(productInput));
  };

  console.log(productList);

  return (
    <div>
      <h1>Mercado Livre</h1>
      <div>
        <input
          type="text"
          value={ productInput }
          onChange={ ({ target: { value } }) => setProductInput(value) }
        />
      </div>
      <button type="button" onClick={ teste }>
        Pesquisar
      </button>
      <div>
        {
          productList.length > 0 ? (
            productList.map((product, index) => (
              <ProductCard
                key={ index }
                productName={ product.title }
                productPrice={ product.price }
                productImage={ product.thumbnail }
                productId={ product.id }
              />
            ))
          ) : (
            <h1>Pesquise seu produto</h1>
          )
        }
      </div>
    </div>
  );
}
