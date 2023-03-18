<script lang="ts">
	import type { PageServerData } from './$types'

	import Button from '$lib/components/Button.svelte'
	import FloatingCard from '$lib/layouts/FloatingCard.svelte'
	import Vertical from '$lib/layouts/Vertical.svelte'

	export let data: PageServerData

	const { products } = data.products

	const deals = [
		{
			type: 'primary',
			title: 'Best deals',
			desc: 'On electronics',
			heading: '36%<span>Off</span>',
			btnText: 'Shop now'
		},
		{
			type: 'secondary',
			title: 'Bag',
			desc: 'Collection',
			heading: 'Wow!',
			btnText: 'View'
		},
		{
			type: 'tertiary',
			title: 'Welcome to Shyn',
			desc: 'Shyn is currently under heavily development stage. It would take a lot of time to stable. Stay tuned!',
			heading: null,
			btnText: null
		}
	]
</script>

<section class="container">
	<div class="scroll horizontal">
		{#each deals as deal}
			<div class="scroll-item card tw-w-[18rem] tw-p-md border-radius {deal.type}-container on-{deal.type}-container-text">
				<div class="card--body tw-gap-sm">
					<article class="tw-flex tw-justify-between tw-items-center">
						<div>
							<h3>{deal.title}</h3>
							<p>{deal.desc}</p>
						</div>
						{#if deal.heading}
							<h1>{@html deal.heading}</h1>
						{/if}
					</article>
					{#if deal.btnText}
						<div class="card-actions">
							<Button type={deal.type} small="true" fullWidth="true">{deal.btnText}</Button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="container">
	<div class="tw-flex tw-justify-between tw-items-center">
		<h6>Recommended</h6>
		<Button small="true" outlined="true" role="link" href="/products">View all</Button>
	</div>
	<div class="scroll horizontal">
		{#each products as product}
			<div class="scroll-item card border-radius tw-w-[16rem] secondary-container on-secondary-container-text">
				<picture class="tw-h-[10.5rem]">
					<img src={product.thumbnail} alt={product.title} />
				</picture>
				<div class="card--body tw-p-sm tw-gap-2xs">
					<article class="tw-gap-sm">
						<h6>{product.brand}</h6>
						<p>{product && product.title.length > 20 ? product.title.slice(20) : product.title}</p>
					</article>
					<div class="card--footer">
						<div class="card--price">
							<h5 style="font-size: var(--step-2)">${product.price}</h5>
							<!-- <p><s>$50</s></p> -->
						</div>
						<div class="card--actions">
							<Button role="link" href="/product/{product.id}" type="secondary" small="true">View</Button>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<FloatingCard />

<Vertical />

<style>
	h1 {
		font-family: var(--sans);
		font-weight: 500;
	}

	h1 > :global(span) {
		font-size: var(--step-1);
		margin-left: 4px;
	}
</style>
