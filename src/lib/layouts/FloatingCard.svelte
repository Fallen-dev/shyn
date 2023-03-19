<script>
	import skincare_image from '$lib/assets/skincare-shiny-diamond.jpg?w=400&format=avif;webp;jpg&picture&flop'
	import Button from '$lib/components/Button.svelte'

	import getImage from '$lib/getImage'
	import Picture from '$lib/components/Picture.svelte'

	const { sources, fallback } = skincare_image

	const datasets = getImage(sources)

	const styles = ['margin-left: var(--space-xl)', `height: calc(${fallback.h}px - 240px)`]
</script>

<!-- Layout 1 -->
<div class="container tw-flex tw-flex-col">
	<Picture {datasets} alt="Woman applying facial mask. Photo by Shiny Diamond on Pexels." borderRadius="true" fallback={fallback.src} style={styles.join(';')} />
	<div class="card border-radius surface-variant on-surface-variant-text">
		<div class="card--body tw-gap-md tw-p-md">
			<article class="tw-space-y-sm">
				<h3>Start a perfect skincare regime</h3>
				<p>With our latest skincare collection, you can get the glass glow skin.</p>
			</article>
			<div class="card--actions">
				<Button small="true" type="outlined" role="link" href="/shop/skincare">Start now</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		margin-top: calc(var(--space-3xl) * -1);
		margin-right: var(--space-xl);
		box-shadow: var(--shadow) 4px 4px 0 0;
	}
</style>
