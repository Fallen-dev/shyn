<script lang="ts">
	import '../app.css'
	import TopBar from '$lib/components/TopBar.svelte'
	import { fly } from 'svelte/transition'

	export let data: import('./$types').LayoutData
</script>

<TopBar />

{#key data.url}
	<div in:fly={{ duration: 600, y: 60, delay: 600 }} out:fly={{ duration: 600, y: 60 }}>
		<slot />
	</div>
{/key}
