<script lang="ts">
	export let width: string = '24',
		height: string = width,
		stroke: string = 'currentColor'
</script>

<svg {width} {height} {stroke} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<slot />
</svg>
