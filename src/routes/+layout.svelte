<script>
	import '../app.css'
	import TopBar from '$lib/components/TopBar.svelte'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
</script>

<TopBar />

{#key $page.url}
	<div in:fly={{ duration: 600, y: 50, delay: 600 }} out:fly={{ duration: 600, y: 50 }}>
		<slot />
	</div>
{/key}
