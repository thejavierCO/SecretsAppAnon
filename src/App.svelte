<script>
	import Auth from "./Auth.svelte";
</script>
<ul>
	<li>
	</li>
	<Auth let:Btn>
		<Btn></Btn>
	</Auth>
	<Auth>
		<li slot="singIn">dashboard</li>
	</Auth>
</ul>
<Auth>
	<div slot="singIn" let:auth>
		{auth.name}
	</div>
</Auth>
<Auth>
	<div slot="singIn" let:storage>
		{storage.putFile("test",JSON.stringify("ahsdih"),{encrypt:true})}
	</div>
</Auth>