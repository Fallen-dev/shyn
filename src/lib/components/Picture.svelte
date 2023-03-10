<script lang="ts">
	export let sources: { source: any }, fallback: { src: string }, alt: string
</script>

<picture>
	{#each Object.entries(sources) as source}
		<source srcset={source[1][0].src} type="image/{source[0]}" />
	{/each}
	<img src={fallback.src} {alt} />
</picture>
