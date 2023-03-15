<script>
	import Button from '$lib/components/Button.svelte'
	import Picture from '$lib/components/Picture.svelte'

	import getImage from '$lib/getImage'
	import bag_image from '$lib/assets/bag-cottonbro-studio.jpg?w=400&format=avif;webp;jpg&picture'

	const { sources, fallback } = bag_image
	const datasets = getImage(sources)

	const styles = ['margin-inline: calc(var(--space-m) * -1)']
</script>

<div class="container">
	<article>
		<p>New</p>
		<h2 class="tw-uppercase tw-tracking-wide">Collection</h2>
	</article>
	<Picture alt="Woman in a blue jacket showing bag. Photo by Cottonbro studio on Pexels." borderRadius="true" {datasets} fallback={fallback.src} style={styles.join(';')} />
	<p>Check out the latest collection of women hand bags. Perfectly designed that fits with your fashion.</p>
	<Button fullWidth="true">Shop now</Button>
</div>

<style>
	article {
		text-align: center;
		margin-bottom: var(--space-m);
	}
</style>
