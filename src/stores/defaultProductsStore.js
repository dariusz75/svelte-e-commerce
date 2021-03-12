import { writable } from 'svelte/store';

import localProducts from '../localProducts';

const flattenProducts = (data) => {
  return data.map((product) => {
    let image = product.image.url;
    return { ...product, image };
  });
};

const defaultProductsStore = writable(flattenProducts([...localProducts]));

export default defaultProductsStore;
