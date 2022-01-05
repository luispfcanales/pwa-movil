import { writable } from 'svelte/store';

const User = { Username: "luis", Password:"hola"};

export const NavStore = writable([false,false,false,true]);
export const UserStore = writable(null);
export const LoadingAnimation = writable(false);


