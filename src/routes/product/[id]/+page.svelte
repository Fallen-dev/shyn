<script lang="ts">
	import price from '$lib/price'
	import type { PageServerData } from './$types'

	export let data: PageServerData

	const { product } = data
</script>

<section class="scroll horizontal secondary-container tw-max-h-[40vh] tw-overflow-y-hidden">
	{#each product.images as image}
		<div class="scroll-item tw-w-full tw-overflow-hidden">
			<picture class="border-radius">
				<img class="tw-object-cover" src={image} alt={product.title} />
			</picture>
		</div>
	{/each}
</section>
<section class="container">
	<div>
		<p>{product.brand}</p>
		<h4>{product.title}</h4>
	</div>
	<div class="details tw-columns-2 tw-gap-2xs">
		<!-- Price -->
		<div class="tertiary-container on-tertiary-container-text">
			<h4>{price(+product.price, +product.discountPercentage).afterDiscount()}</h4>
			<h6>
				<span class="tw-text-sm">Was&nbsp;{price().format(+product.price)}</span>
			</h6>
		</div>
		<!-- rating -->
		<div class="secondary-container on-secondary-container-text">
			<p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-md tw-h-md tw-mx-auto">
					<path
						fill-rule="evenodd"
						d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
						clip-rule="evenodd"
					/>
				</svg>
			</p>
			<h6>{product.rating}&nbsp; ratings</h6>
		</div>
		<!-- COD -->
		<div class="tw-bg-green-200 tw-twxt-green-900">
			<h6>COD available</h6>
		</div>
		<!-- shipping -->
		<div class="tw-bg-indigo-200 tw-text-indigo-900">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="tw-w-md tw-h-md tw-mx-auto">
				<path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
				<path
					d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"
				/>
				<path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
			</svg>

			<h6>Free shipping</h6>
		</div>
	</div>
	<div class="tw-grid tw-gap-sm">
		<h3>About this product</h3>
		<p>{@html product.description}.</p>
	</div>
</section>

<style>
	h4 {
		font-family: var(--sans);
		font-size: var(--step-2);
		font-weight: 700;
	}
	.details > div {
		text-align: center;
		border-radius: var(--step-3);
		padding: var(--space-s);
		break-inside: avoid;
		margin-bottom: var(--space-xs);
	}
</style>
