import { writable } from 'svelte/store';

import url from '../strapi/URL';
import getProducts from '../strapi/getProducts'

const productsStore = writable([], ()=>{
  setProducts();
  return ()=>{}
})

async function setProducts() {
  let products = await getProducts()

  if(products) {
    products = flattenProducts(products);
    productsStore.set(products)
  }
}

const flattenProducts = (data) => {
  return data.map((product) => {
    // let image = product.image.url;
    let image = `${url}${product.image.url}`
    return { ...product, image };
  });
};


export default productsStore;
