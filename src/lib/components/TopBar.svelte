<script>
</script>

<header class="surface on-surface-text">
	<ul>
		<li>
			<a href="/" class="logo">Shyn</a>
		</li>
	</ul>
	<ul>
		<button>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001"
					stroke="black"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M8.99995 22H14.9999C19.0199 22 19.7399 20.39 19.9499 18.43L20.6999 12.43C20.9699 9.99 20.2699 8 15.9999 8H7.99995C3.72995 8 3.02995 9.99 3.29995 12.43L4.04995 18.43C4.25995 20.39 4.97995 22 8.99995 22Z"
					stroke="black"
					stroke-width="1.5"
					stroke-miterlimit="10"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path d="M15.4955 12H15.5045" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M8.49451 12H8.50349" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</button>
	</ul>
</header>

<style>
	header {
		z-index: 9;
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		padding-block: var(--space-s);
		padding-inline: var(--space-m);

		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	ul {
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	.logo {
		font-family: var(--serif);
		font-size: var(--step-2);
		font-weight: 700;
		letter-spacing: 0.025rem;
	}
</style>
