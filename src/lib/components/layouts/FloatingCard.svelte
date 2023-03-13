<script>
	import skincare from '$lib/assets/skincare-shiny-diamond.jpg'
	import Button from '../Button.svelte'
</script>

<!-- Layout 1 -->
<div class="container flex flex-col">
	<picture>
		<img src={'//unsplash.it/400'} alt="" class="border-radius" />
	</picture>
	<div class="card primary-container">
		<h3>Start a perfect skincare regime</h3>
		<p>With our latest skincare collection, you can get the glass glow skin.</p>
		<Button>Start now</Button>
	</div>
</div>

<style>
	picture {
		margin-right: var(--space-xl);
	}
	.card {
		margin-top: calc(var(--space-3xl) * -1);
		margin-left: var(--space-xl);
	}
</style>
