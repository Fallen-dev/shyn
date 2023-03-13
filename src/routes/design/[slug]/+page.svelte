<script>
	import Button from '$lib/components/Button.svelte'
</script>

<h1>Design system</h1>

<h2>Headings</h2>
<h1>This is a h1. Only used for main heading for a page.</h1>
<h2 data-not-heading>And this is a h2. This is used for as a heading in sections. h2 should be uppercased.</h2>
<h3>This is h3. It is used for titles, small headings or title for a card or item.</h3>

<h6>This os a h6. It is used as "bold" text only. It is convenient and make total sense.</h6>
<p>This is a paragraph. Paragraph an span elements share same design unless they are excplicitly styled All texts must use paragraph through the design instead of a div.</p>

<h2>Buttons</h2>
<Button>Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="error">Error</Button>
<Button disabled>Disabled</Button>
