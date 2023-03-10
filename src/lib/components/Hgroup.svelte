<script>
	export let adjective = '',
		noun = ''
</script>

<div style="text-align: center; text-transform: uppercase; {$$restProps.style}">
	<p style:margin-bottom="5px" style={$$restProps.style}>{adjective}</p>
	<h2>{noun}</h2>
</div>
