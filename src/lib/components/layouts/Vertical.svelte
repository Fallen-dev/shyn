<script>
	import Button from '../Button.svelte'
</script>

<div class="container">
	<article>
		<p>NEW</p>
		<h2>Arrivals</h2>
	</article>
	<picture>
		<img src="//unsplash.it/500" alt="" />
	</picture>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, labore.</p>
	<Button fullWidth={true}>Shop now</Button>
</div>

<style>
	.container > :global(* + *) {
		margin-top: var(--space-m);
	}
	article {
		text-align: center;
		margin-bottom: var(--space-m);
	}
	picture {
		display: block;
		height: 300px;
	}
</style>
