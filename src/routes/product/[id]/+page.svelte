<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import price from '$lib/price'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const { product } = data
</script>

<section class="tw-w-full tw-h-[40vh] scroll horizontal secondary-container">
	{#each product.images as src, index}
		<picture class="tw-w-full tw-h-full tw-flex-shrink-0 scroll-item">
			<img class="tw-object-cover" {src} alt="{product.title}. Image number {++index}" />
		</picture>
	{/each}
</section>
<section class="container">
	<div class="tw-grid tw-gap-3xs">
		<p>{product.brand}</p>
		<h2>{product.title}</h2>
	</div>

	<div class="tw-grid tw-gap-sm">
		<div>
			<div class="tw-text-xs tw-font-medium tw-flex tw-items-center tw-gap-2xs">
				<p class="tw-text-gray-600">{product.discountPercentage}% off</p>
				<p class="tw-text-gray-400">Was {price().format(+product.price)}</p>
			</div>
			<div class="tw-mt-3xs tw-flex tw-justify-between tw-items-center">
				<h4 class="primary-text">{price(+product.price, +product.discountPercentage).afterDiscount()}</h4>
				<Button type="outlined" small="true">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
						<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
					</svg>
				</Button>
			</div>
		</div>
		<Button fullWidth="true">Buy now</Button>
	</div>

	<div class="tw-grid tw-gap-sm">
		<h3>About this product</h3>
		<p>{@html product.description}.</p>
	</div>
</section>

<style>
	h2 {
		font-weight: 500;
	}
	h4 {
		font-family: var(--sans);
		font-size: var(--step-2);
		font-weight: 700;
	}
</style>
