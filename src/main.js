import { isSingIn } from "./stacks.js";
import { auth } from "./data.js"
import App from './App.svelte';

window.onload = ()=>auth.set(isSingIn());

const app = new App({
	target: document.querySelector("[app]"),
	props: {
		text:"hi!"
	}
});

export default app;