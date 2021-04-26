<script>
	import Login from "./login.svelte";
    import { auth } from "./data.js";
    import { profile , user , storage } from "./stacks.js"
</script>

<slot Btn={Login}></slot>

{#if $auth == true}
    {#if $$slots.singIn}
        <slot name="singIn" auth={ profile()._profile } sesion={ user }  { storage }></slot>
    {/if}
{:else}
    {#if $$slots.singUp}
        <slot name="singUp"></slot>
    {/if}
{/if}