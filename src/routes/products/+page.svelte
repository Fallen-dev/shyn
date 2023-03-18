<script>
	import Button from '$lib/components/Button.svelte'
	import price from '$lib/price'

	export let data

	const { products } = data.products
</script>

<div class="container">
	{#each products as product}
		<div class="vcard border-radius primary-container on-primary-container-text">
			<picture class="border-radius">
				<img src={product.thumbnail} alt={product.title} />
			</picture>
			<section class="tw-grid tw-gap-2xs">
				<div>
					<p>{product.brand}</p>
					<h4>{product.title}</h4>
				</div>
				<div class="tw-font-medium">
					<p>&star; {product.rating}</p>
				</div>
				<div>
					<div class="tw-font-medium tw-flex tw-items-center tw-gap-2xs">
						<p class="inverse-surface-text">{product.discountPercentage}% off</p>
						<p class="inverse-primary-text">Was {price().format(+product.price)}</p>
					</div>
					<div class="tw-mt-3xs tw-flex tw-justify-between tw-items-center">
						<h4 class="primary-text">{price(+product.price, +product.discountPercentage).afterDiscount()}</h4>
						<Button type="primary-container" small="true">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
							</svg>
						</Button>
					</div>
				</div>
			</section>
		</div>
	{/each}
</div>

<style>
	.vcard {
		display: grid;
		grid-template-columns: 0.8fr 1fr;
		font-size: var(--step--1);
	}
	.vcard > picture {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	.vcard > picture > img {
		width: 100%;
		height: 100%;
	}
	.vcard > section {
		padding: var(--space-s, 1rem);
	}

	h4 {
		font-family: var(--sans);
		font-weight: 500;
		font-size: var(--step-1);
	}
</style>
