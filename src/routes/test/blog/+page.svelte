<script>
	export let data;
</script>

<ul class="mb-5">
	{#each data.summaries as { slug, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
		</li>
	{/each}
</ul>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>
