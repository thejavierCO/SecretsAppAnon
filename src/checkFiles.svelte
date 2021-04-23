<script>
	import {AuthStorage} from "./data.js"
</script>

{#await $AuthStorage}
<slot name="load">load</slot>
{:then item}
	{#each item as files}
		{#await files}
			<slot name="load">load</slot>
		{:then file}
			<slot name="file" {file}>ok</slot>
		{:catch err}
			<slot name="err" {err}>err</slot>
		{/await}
	{/each}
{:catch err}
<slot name="err" {err}>err</slot>
{/await}