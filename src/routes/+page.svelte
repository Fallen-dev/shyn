<script lang="ts">
	import type { PageServerData } from './$types'

	import Button from '$lib/components/Button.svelte'
	import FloatingCard from '$lib/components/layouts/FloatingCard.svelte'
	import Vertical from '$lib/components/layouts/Vertical.svelte'
	import TopBar from '$lib/components/TopBar.svelte'

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
			title: 'Too early',
			desc: 'WIP stage',
			heading: 'Shyn',
			btnText: 'Thanks for visiting Shyn'
		}
	]
</script>

<TopBar />

<section class="container">
	<div class="scroll horizontal">
		{#each deals as deal}
			<div class="card scroll-item {deal.type}-container on-{deal.type}-container-text">
				<div class="tw-flex tw-justify-between tw-items-center tw-gap-6">
					<article>
						<h3>{deal.title}</h3>
						<p>{deal.desc}</p>
					</article>
					{#if deal.heading}
						<h1>{@html deal.heading}</h1>
					{/if}
				</div>
				<Button type={deal.type} fullWidth="true" small="true">{deal.btnText}</Button>
			</div>
		{/each}
	</div>
</section>

<section class="container">
	<div class="tw-flex tw-justify-between tw-items-center">
		<h6>Recommended</h6>
		<Button small="true" outlined="true">View all</Button>
	</div>
	<div class="scroll horizontal">
		{#each products as product}
			<div class="scroll-item border-radius secondary-container on-secondary-container-text tw-overflow-hidden">
				<div class="tw-w-72 tw-h-48">
					<img src={product.thumbnail} alt={product.title} />
				</div>
				<div class="tw-p-4" style="font-size: var(--step--1)">
					<article class="tw-mb-3">
						<p>{product.brand}</p>
						<h6>{product.title?.length > 20 ? product.title.slice(0, 20) + '...' : product.title}</h6>
					</article>
					<Button type="secondary" small="true">View</Button>
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
