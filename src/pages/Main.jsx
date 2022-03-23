import React, { useEffect, useState } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/API';

export default function Main() {
  const [productList, setProductList] = useState([]);

  const teste = async () => {
    setProductList(await getProductsFromCategoryAndQuery('computador'));
  };

  useEffect(() => {
    teste();
  }, []);

  console.log(productList);

  return (
    <div>Main</div>
  );
}
