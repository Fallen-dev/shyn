<script>
	import Button from '../Button.svelte'
</script>

<div class="container">
	<article>
		<p>New</p>
		<h2 class="uppercase tracking-wide">Collection</h2>
	</article>
	<picture>
		<img src="//unsplash.it/500" alt="" />
	</picture>
	<p>Check out the latest collection of women hand bags. Perfectly designed that fits with your fashion.</p>
	<Button fullWidth={true}>Shop now</Button>
</div>

<style>
	article {
		text-align: center;
		margin-bottom: var(--space-m);
	}
	picture {
		display: block;
		height: 300px;
		margin-inline: calc(var(--space-m) * -1);
	}
</style>
