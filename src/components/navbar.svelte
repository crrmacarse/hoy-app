<script>
	import Icon from '@iconify/svelte';
	import { ADMIN_PROFILE_PAGE, HOME_PAGE, LOGIN_PAGE } from '@app/constants/route';
</script>

<navbar class="p-4 w-full bg-white flex justify-between space-x-4 border-b items-center">
	<h3>Looper App</h3>
	<div class="flex flex-row space-x-6 items-center">
		<a href={HOME_PAGE}> Home </a>
		<a href="/test/blog"> Blog </a>
		<a href="/test/form"> Form </a>
		<a href={LOGIN_PAGE}> Login </a>
		<!-- <a href={ADMIN_PROFILE_PAGE}>
			<Icon icon="mdi:account-circle" height={38} color="#16A34A" />
		</a> -->
		<!-- <button on:click={() => console.log('test')}>Log Out </button> -->
	</div>
</navbar>
