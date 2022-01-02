import { writable } from 'svelte/store';

const NavStore = writable([true,false,false,false]);

export default NavStore;
