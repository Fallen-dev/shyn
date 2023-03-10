<script lang="ts">
	import '../app.scss'
	import Navigation from '$lib/components/Navigation.svelte'
	import type { LayoutServerData } from './$types'
	import { fly } from 'svelte/transition'

	export let data: LayoutServerData
</script>

<Navigation {data} type="top" />
{#key data.url}
	<div
		class="root-layout"
		in:fly={{ delay: 600, duration: 600, y: 60 }}
		out:fly={{ duration: 600, y: 60 }}
	>
		<slot />
	</div>
{/key}
<Navigation {data} type="bottom" />

<style lang="scss">
	:global(body) {
		overflow-x: hidden;
	}
	.root-layout {
		padding-bottom: $space-3xl;
	}
</style>
