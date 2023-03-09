<script lang="ts">
	import '../app.scss'
	import Navigation from '$lib/components/navigation.svelte'
	import type { LayoutServerData } from './$types'

	export let data: LayoutServerData
	const { url } = data
</script>

<Navigation {data} type="top" />
<slot />
<Navigation {data} type="bottom" />
