import { writable } from 'svelte/store';

const NavStore = writable([false,false,false,true]);

export default NavStore;
