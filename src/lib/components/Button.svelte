<script lang="ts">
	export let type: 'primary' | 'secondary' | 'error' = 'primary',
		small: boolean = false,
		disabled: boolean = false,
		role: 'button' | 'link' = 'button',
		href: string = '',
		gap: string = '.25rem',
		fullWidth: boolean = false
</script>

{#if role === 'button'}
	<button style="--gap: {gap}; --color: var(--on-{type}-container); --background: var(--{type}-container);" class:small class:fullWidth {disabled}>
		<slot />
	</button>
{:else if role === 'link'}
	<a {href} role="button" style="--gap: {gap}; --color: var(--on-{type}-container); --background: var(--{type}-container);" class:small class:fullWidth>
		<slot />
	</a>
{/if}
