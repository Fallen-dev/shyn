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

	export let type: 'top' | 'bottom'
	export let data: LayoutServerData
	const { url } = data
</script>

{#if type === 'top'}
	<nav class="nav-top">
		<div class="nav-item">
			<a href="/" class="nav-logo">Nile</a>
		</div>
		<div class="nav-item">
			<a href="/bag" aria-label="Bag">
				{#if url.includes('bag')}
					<Bag_1 />
				{:else}
					<Bag />
				{/if}
			</a>
		</div>
	</nav>
{:else if type === 'bottom'}
	<nav class="nav-bottom">
		<div class="nav-item">
			<a href="/">
				{#if url === '/'}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002ZM12.75 18C12.75 18.41 12.41 18.75 12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18Z"
							fill="#31251C"
						/>
					</svg>
				{:else}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M12 18V15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M20.64 19.24C20.4 20.65 19.03 21.81 17.6 21.81H6.40002C4.96002 21.81 3.60002 20.66 3.36002 19.24L2.03002 11.28C1.86002 10.3 2.36002 8.98997 3.14002 8.36997L10.07 2.81997C11.13 1.96997 12.86 1.96997 13.93 2.82997L20.86 8.36997C21.63 8.98997 22.13 10.3 21.97 11.28L21.35 15"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/categories">
				{#if url.includes('categories')}
					<Category_1 />
				{:else}
					<Category />
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/search">
				{#if url.includes('search')}
					<Search_1 />
				{:else}
					<Search />
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/wishlist">
				{#if url.includes('wishlist')}
					<Heart_1 />
				{:else}
					<Heart />
				{/if}
			</a>
		</div>
		<div class="nav-item">
			<a href="/setting">
				{#if url.includes('setting')}
					<Setting_1 />
				{:else}
					<Setting />
				{/if}
			</a>
		</div>
	</nav>
{/if}

<style lang="scss">
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
			font-size: $step-1;
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
			background-color: $beige;
			color: $on-beige;
			border-radius: 1rem 1rem 0 0;
		}

		& > .nav-item > :global(* + *) {
			margin-left: 0.3rem;
		}
	}
</style>
