<script>
	import Auth from "./Auth.svelte";
</script>

<div class="Menu">
	<Auth>
		<button slot="singIn">dashboard</button>
	</Auth>
	<Auth let:Btn>
		<Btn></Btn>
	</Auth>
</div>


<Auth>
	<div slot="singIn" let:auth>
		{auth.name}
	</div>
</Auth>

<style>
	.Menu{
		position:relative;
		margin:0;
		background:red;
		padding:10px;
	}
</style>