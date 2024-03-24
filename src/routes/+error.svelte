<script lang="ts">
	import { page } from '$app/stores';

	const emojis = {
		// TODO add the rest!
		420: '🫠',
		500: '💥'
	};
</script>

<h1>{$page.status} {$page.error?.message}</h1>

<p>
	{emojis[$page.status] ?? emojis[500]}
</p>
