<script lang="ts">
	import '../app.scss'
	import Navigation from '$lib/components/navigation.svelte'
	import type { LayoutServerData } from './$types'
	import { fly } from 'svelte/transition'

	export let data: LayoutServerData
</script>

<Navigation {data} type="top" />
{#key data.url}
	<div in:fly={{ delay: 600, duration: 600, y: 60 }} out:fly={{ duration: 600, y: 60 }}>
		<slot />
	</div>
{/key}
<Navigation {data} type="bottom" />
