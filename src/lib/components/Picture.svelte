<script lang="ts">
	export let datasets: any,
		fallback: string,
		alt: string,
		style = '',
		borderRadius: 'true' | null = null
</script>

<picture {style} class:border-radius={borderRadius}>
	{#each datasets as { srcset, type }}
		<source {srcset} {type} />
	{/each}
	<img src={fallback} {alt} />
</picture>
