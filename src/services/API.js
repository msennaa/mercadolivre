export default async function getProductsList(query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const data = await response.json();
  return data.results;
}

export async function getProduct(id) {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsByCategories(id) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const data = await response.json();
  return data.results;
}

export const getDescription = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
  const data = await response.json();
  return data.plain_text;
};
