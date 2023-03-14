<script>
	// @ts-ignore
	import skincare_image from '$lib/assets/skincare-shiny-diamond.jpg?w=400&format=avif;webp;jpg&picture'
	import Button from '../Button.svelte'

	const { sources, fallback } = skincare_image

	console.log(sources.avif[0].src)
</script>

<!-- Layout 1 -->
<div class="container tw-flex tw-flex-col">
	<picture>
		<source srcset={sources.avif[0].src} type="image/avif" />
		<source srcset={sources.webp[0].src} type="image/webp" />
		<img src={fallback.src} alt="Woman applying face mask. By Shiny Diamond on Pexels." class="border-radius" />
	</picture>
	<div class="card surface-variant on-surface-variant-text">
		<h3>Start a perfect skincare regime</h3>
		<p>With our latest skincare collection, you can get the glass glow skin.</p>
		<Button small={true} type="primary-container" outlined={true}>Start now</Button>
	</div>
</div>

<style>
	picture {
		margin-right: var(--space-xl);
		border-radius: var(--step-3);
	}
	.card {
		margin-top: calc(var(--space-3xl) * -1);
		margin-left: var(--space-xl);
	}
</style>
