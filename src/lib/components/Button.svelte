<script lang="ts">
	export let type: ButtonType = 'primary',
		small: 'true' | null = null,
		role: 'button' | 'link' = 'button',
		href = '',
		gap = '.25rem',
		fullWidth: 'true' | null = null
</script>

{#if role === 'button'}
	<button style="--gap: {gap}; --color: var(--on-{type}); --background: var(--{type});" class:small class:fullWidth class:outlined={type === 'outlined'} disabled={type === 'disabled'}>
		<slot />
	</button>
{:else if role === 'link'}
	<a
		{href}
		role="button"
		style="--gap: {gap}; --color: var(--on-{type}); --background: var(--{type});"
		class:small
		class:fullWidth
		class:outlined={type === 'outlined'}
		class:disabled={type === 'disabled'}
	>
		<slot />
	</a>
{/if}

<style>
	button,
	a[role='button'] {
		background-color: var(--background);
		border: 2px solid var(--shadow);
		box-shadow: var(--shadow) 2px 2px 0 0;
		color: var(--color);
		padding-block: var(--space-xs);
		padding-inline: var(--space-m);
		border-radius: 999px;

		font-weight: 700;
		font-size: var(--step--1);

		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;

		width: max-content;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--gap);
	}

	button:is(:active, :focus-visible):not(:disabled),
	a[role='button']:is(:active, :focus-visible) {
		box-shadow: var(--shadow) 0px 0px 0 0;
		transform: translate(2px, 2px);
	}

	button:disabled,
	a[role='button'].disabled {
		background-color: var(--outline-variant);
		color: var(--outline);
		cursor: not-allowed;
		box-shadow: none;
	}

	button.fullWidth,
	a[role='button'].fullWidth {
		padding-block: var(--space-s);
		width: 100%;
	}

	button.small,
	a[role='button'].small {
		padding-block: calc(var(--space-xs) - 0.25rem);
		padding-inline: var(--space-s);
	}

	button.outlined,
	a[role='button'].outlined {
		background-color: transparent;
		color: inherit;
	}
</style>
