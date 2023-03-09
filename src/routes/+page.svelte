<script lang="ts">
	import { fly } from 'svelte/transition'

	const spreadBackground = (node: HTMLElement, { duration = 0, delay = 0 }) => {
		return {
			duration,
			delay,
			css: (t: number): string => `width: ${t * 50}%;`
		}
	}
</script>

<h1>Home</h1>

<div class="container">
	<div class="text">
		<div class="background" in:spreadBackground={{ duration: 600, delay: 1000 }} />
		<div in:fly={{ duration: 800, y: 20, delay: 1000 }}>
			<p style:margin-bottom="5px">New</p>
			<h2 style:text-transform="uppercase">Arrivals</h2>
		</div>
	</div>
</div>
<div class="hscroll" in:fly={{ duration: 600, delay: 1100, x: 50 }}>
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

<div style="text-align: center; margin-top: 1rem;">
	<h6>Don't worry</h6>
	<h1>To be continued</h1>
</div>

<style lang="scss">
	.container {
		padding: $space-s;
	}

	.container > :global(* + *) {
		margin-top: $space-m;
	}
	.container .text {
		text-align: center;

		& .background {
			z-index: -1;
			background-color: $red;
			width: 50%;
			height: 5rem;
			margin-bottom: calc($space-xl * -1.25);
			border-radius: 0.6rem 1.2rem 0.6rem 1.2rem;
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
</style>
