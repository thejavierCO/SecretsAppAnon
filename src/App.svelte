<script>
	import {AuthUser,AuthStorage} from "./data.js"
	import Login from "./login.svelte";
	export let text;
</script>

<h1>{text} welcome {$AuthUser} my aplication</h1>
<Login style="background: rgba(0,0,0,0.5);color:#fff;border:solid 1px red;" />
{#await $AuthStorage}
<div>load</div>
{:then item}
	{#each item as files}
		{#await files}
			load
		{:then file}
			{console.log(file)}
		{:catch err}
			err
		{/await}
	{/each}
{:catch err}
<div>err</div>
{/await}