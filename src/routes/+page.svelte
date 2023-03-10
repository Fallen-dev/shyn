<script lang="ts">
	import { fly } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import Picture from '$lib/components/Picture.svelte'
	import Hgroup from '$lib/components/Hgroup.svelte'

	import { images } from '$lib/assets'

	const spreadBackground = (node: HTMLElement, { duration = 0, delay = 0 }) => {
		return {
			duration,
			delay,
			easing: cubicInOut,
			css: (t: number): string => `width: ${t * 50}%;`
		}
	}

	const { skincare, bag } = images
</script>

<div class="wrapper">
	<section class="container">
		<div class="text">
			<div class="background" in:spreadBackground={{ duration: 600, delay: 600 }} />
			<div in:fly={{ duration: 800, y: 20, delay: 600, easing: cubicInOut }}>
				<Hgroup adjective="New" noun="Arrivals" />
			</div>
		</div>
	</section>

	<section class="top-space-fix">
		<div class="hscroll" in:fly={{ duration: 600, delay: 1000, y: 60, easing: cubicInOut }}>
			<div class="card">
				<!--  -->
			</div>
			<div class="card">
				<!--  -->
			</div>
			<div class="card">
				<!--  -->
			</div>
			<div class="card">
				<!--  -->
			</div>
		</div>
	</section>

	<section class="skincare" in:fly={{ duration: 600, delay: 1200, y: 60, easing: cubicInOut }}>
		<div class="skincare--img">
			<Picture
				sources={skincare.sources}
				fallback={skincare.fallback}
				alt="Woman applying face mask. Photo by Shiny Diamond on Pexels.com"
			/>
		</div>
		<div class="skincare--text" in:fly={{ duration: 700, delay: 1300, y: 60, easing: cubicInOut }}>
			<h5>Start a perfect skincare regime</h5>
			<p>Shop from our wisely chosen skincare products for the perfect skin.</p>
			<a href="/" role="button">Shop now</a>
		</div>
	</section>

	<section class="bags top-space-fix">
		<div class="bags--text">
			<Hgroup adjective="new" noun="collection" />
		</div>
		<div>
			<Picture
				sources={bag.sources}
				fallback={bag.fallback}
				alt="A woman in blue jacket showing her modern bag. Photo by Cottonbro studio on Pexels.com"
			/>
		</div>
		<div class="container">
			<p>
				Check out the newest collection of women bags. Handmade and dsesigned with perfection to
				give you the best value.
			</p>
			<a href="/" role="button" style="display: block; margin-top: 1.5rem;">Show now</a>
		</div>
	</section>
</div>

<style lang="scss">
	.container {
		padding-inline: $space-s;
		margin-top: $space-m;
	}

	.top-space-fix {
		margin-top: $space-s;
	}

	.container .text {
		text-align: center;

		& .background {
			z-index: -1;
			background-color: $red;
			width: 50%;
			height: 5rem;
			margin-bottom: calc($space-xl * -1.25);
			border-radius: 0.4rem 1.25rem;
		}
	}

	.hscroll {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: $space-s;
		background-color: transparent;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;

		&::-webkit-scrollbar {
			display: none;
		}

		& > * {
			flex-shrink: 0;
			scroll-snap-align: center;
		}

		& > :first-child {
			margin-left: $space-s;
		}

		& > :last-child {
			margin-right: $space-s;
		}
	}

	.card {
		background-color: $green;
		border-radius: $space-s;
		color: $on-green;
		width: calc(100vw - 6rem);
		height: 8rem;
		padding: $space-m;
	}

	.skincare {
		display: grid;
		align-items: end;
		grid-template-columns: 1fr 0.5fr 1fr 1fr;
		grid-template-rows: 1fr $space-l $space-2xl;
		min-width: auto;
		max-width: 100%;

		& .skincare--img {
			grid-column: 1 / 4;
			grid-row: 1 / 3;
		}
		& .skincare--text {
			grid-column: -1 / 3;
			grid-row: 1 / -1;
			padding: $space-s;
			background-color: bisque;
			min-width: auto;
			max-width: 100%;
			flex-shrink: 0;

			& > * + * {
				margin-top: $space-s;
			}
		}
	}

	.bags--text {
		padding-block: $space-m;
	}
</style>
