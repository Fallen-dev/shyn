<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import price from '$lib/price'
	import type { PageServerData } from '../../$types'

	export let data: PageServerData

	const { products } = data.allProducts
</script>

<div class="container">
	{#each products as product}
		<a href="/product/{product.id}" class="vcard border-radius primary-container on-primary-container-text">
			<picture class="border-radius">
				<img class="tw-h-[9rem]" src={product.thumbnail} alt={product.title} />
			</picture>
			<section>
				<div class="tw-mb-2xs">
					<p>{product.brand}</p>
					<h4>{product.title}</h4>
				</div>
				<div>
					<div class="tw-font-medium tw-flex tw-items-center tw-gap-xs">
						<p class="inverse-surface-text">{product.discountPercentage}% off</p>
						<p class="tw-flex tw-gap-3xs">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="tw-mt-[1px]">{product.rating}</span>
						</p>
					</div>
					<div class="tw-mt-3xs tw-flex tw-justify-between tw-items-center">
						<h4 class="primary-text">{price(+product.price, +product.discountPercentage).afterDiscount()}</h4>
						<Button type="outlined" small="true">View</Button>
					</div>
				</div>
			</section>
		</a>
	{/each}
</div>

<style>
	.vcard {
		text-decoration: none;
		display: grid;
		grid-template-columns: 40% 60%;
		font-size: var(--step--2);
	}
	.vcard picture {
		overflow: hidden;
	}
	.vcard > section {
		padding-inline: var(--space-s, 1rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h4 {
		font-family: var(--sans);
		font-weight: 500;
		font-size: var(--step-0);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
