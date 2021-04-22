<script>
	import Login from "./login.svelte";
	import {auth} from "./data.js"
	export let text;
</script>

<h1>{text} welcome my aplication</h1>
{$auth}
<Login />