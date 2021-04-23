<script>
	import {AuthUser} from "./data.js"
	import Login from "./login.svelte";
	export let text;
</script>

<h1>{text} welcome {$AuthUser} my aplication</h1>
<Login style="background: rgba(0,0,0,0.5);color:#fff;border:solid 1px red;" />