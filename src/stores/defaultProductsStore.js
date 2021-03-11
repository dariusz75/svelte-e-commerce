import { writable } from 'svelte/store';

import localProducts from '../localProducts';

const defaultProductsStore = writable([...localProducts]);

export default defaultProductsStore;
