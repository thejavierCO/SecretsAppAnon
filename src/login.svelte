<script>
    import { BtnAuth , BtnAuthText , auth } from "./data.js";
    const test = $$restProps;
</script>

<button on:click={$BtnAuth} {...test}>
    <slot name="text" status={ $auth }>{ $BtnAuthText }</slot>
</button>