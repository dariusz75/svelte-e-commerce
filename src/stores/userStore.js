import {writable} from 'svelte/store';

const user = writable({username: null, token: null});

export default user;