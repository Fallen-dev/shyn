<script>
	import FloatingCard from '$lib/components/layouts/FloatingCard.svelte'
	import Button from '$lib/components/Button.svelte'
	import Vertical from '$lib/components/layouts/Vertical.svelte'
</script>

<Button role="link" href="/design/system" small={true} gap=".5rem"
	>Check out the design system
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
		<path
			fill-rule="evenodd"
			d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
			clip-rule="evenodd"
		/>
	</svg>
</Button>

<div class="container">
	<div class="card primary-container">
		<div class="tw-flex tw-justify-between tw-items-center">
			<article>
				<h3>Best deals</h3>
				<p>On Electronics</p>
			</article>
			<article>
				<h2>36% off</h2>
			</article>
		</div>
		<Button fullWidth="true" small="true">Shop now</Button>
	</div>
</div>

<FloatingCard />

<Vertical />

<style>
	h2 {
		font-family: Satoshi;
		font-weight: 500;
	}
</style>
