<div>
	<slot />
</div>

<style>
	div > :global(* + *) {
		margin-top: var(--space-m);
	}
	:global(h2:not([data-not-heading])) {
		text-align: center;
	}
	:global(h2:not([data-not-heading])::before) {
		content: '### ';
	}
	:global(h2:not([data-not-heading])::after) {
		content: ' ###';
	}
</style>
