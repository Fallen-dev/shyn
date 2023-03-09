<script lang="ts">
	import type { LayoutServerData } from '../../routes/$types'
	import Search_1 from '$lib/icons/search-1.svelte'
	import Search from '$lib/icons/search.svelte'
	import Heart from '$lib/icons/heart.svelte'
	import Heart_1 from '$lib/icons/heart-1.svelte'
	import Category from '$lib/icons/category.svelte'
	import Category_1 from '$lib/icons/category-1.svelte'
	import Home from '$lib/icons/home.svelte'
	import Home_1 from '$lib/icons/home-1.svelte'
	import Bag_1 from '$lib/icons/bag-1.svelte'
	import Bag from '$lib/icons/bag.svelte'
	import Setting_1 from '$lib/icons/setting-1.svelte'
	import Setting from '$lib/icons/setting.svelte'
	import Icon from '$lib/icon.svelte'
	import { slide } from 'svelte/transition'

	export let type: 'top' | 'bottom'
	export let data: LayoutServerData

	$: url = data.url
</script>

{#if type === 'top'}
	<nav class="nav-top">
		<div class="nav-item">
			<a href="/" class="nav-logo">Shyn</a>
		</div>
		<div class="nav-item" class:link-active={url.includes('bag')}>
			<a href="/bag" aria-label="Bag">
				{#if url.includes('bag')}
					<Icon>
						<Bag_1 />
					</Icon>
				{:else}
					<Icon>
						<Bag />
					</Icon>
				{/if}
			</a>
		</div>
	</nav>
{:else if type === 'bottom'}
	<nav class="nav-bottom">
		<div class="nav-item">
			<a href="/">
				{#if url === '/'}
					<div in:slide={{ duration: 600 }} class:link-active={url === '/'} />
					<Icon width="20">
						<Home_1 />
					</Icon>
				{:else}
					<Icon width="20">
						<Home />
					</Icon>
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/categories">
				{#if url.includes('categories')}
					<div in:slide={{ duration: 600 }} class:link-active={url.includes('categories')} />
					<Icon width="20">
						<Category_1 />
					</Icon>
				{:else}
					<Icon width="20">
						<Category />
					</Icon>
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/search">
				{#if url.includes('search')}
					<div in:slide={{ duration: 600 }} class:link-active={url.includes('search')} />
					<Icon width="20">
						<Search_1 />
					</Icon>
				{:else}
					<Icon width="20">
						<Search />
					</Icon>
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/wishlist">
				{#if url.includes('wishlist')}
					<div in:slide={{ duration: 600 }} class:link-active={url.includes('wishlist')} />
					<Icon width="20">
						<Heart_1 />
					</Icon>
				{:else}
					<Icon width="20">
						<Heart />
					</Icon>
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/setting">
				{#if url.includes('setting')}
					<div in:slide={{ duration: 600 }} class:link-active={url.includes('setting')} />
					<Icon width="20">
						<Setting_1 />
					</Icon>
				{:else}
					<Icon width="20">
						<Setting />
					</Icon>
				{/if}
			</a>
		</div>
	</nav>
{/if}

<style lang="scss">
	@include keyframes('change-color') {
		100% {
			color: $link-on-primary;
		}
	}
	nav {
		width: 100%;
		z-index: 99;
		background: $surface;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: $space-s;

		.nav-logo {
			font-family: boska;
			font-weight: 700;
			letter-spacing: 0.02rem;
			text-decoration: none;
			font-size: $step-2;
		}

		&.nav-top {
			position: sticky;
			top: 0;
			left: 0;
		}

		&.nav-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			color: $on-beige;
			border-radius: 1rem 1rem 0 0;
		}

		& > .nav-item {
			padding-top: 0.4rem;
			padding-inline: $space-2xs;
			flex-shrink: 0;
			position: relative;

			& > a > .link-active {
				position: absolute;
				inset: 0;
				z-index: -1;
				background-color: $primary;
				border-radius: 1rem 0.5rem 1rem 0.5rem;
				transform: rotate(-4deg);
			}

			& > a:has(.link-active) {
				animation: change-color 100ms linear forwards 80ms;
			}
		}

		& > .nav-item > :global(* + *) {
			margin-left: 0.4rem;
		}
	}
</style>
