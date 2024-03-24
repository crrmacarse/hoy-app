<script lang="ts">
	import { enhance } from '$app/forms';
	import { json } from '@sveltejs/kit';
	import { stringify } from 'postcss';
	import { fly, slide } from 'svelte/transition';

	export let data;
	export let form;

	let creating = false;
	let deleting: string[] = [];
</script>

<div class="flex items-center justify-center">
	<div>
		<div class="mb-5">
			{#if form?.error}
				<p class="text-red-500">{form.error}</p>
			{/if}

			{#if creating}
				<p class="text-blue-500">Saving...</p>
			{/if}

			<form
				method="POST"
				action="?/create"
				class="mb-5"
				use:enhance={() => {
					creating = true;

					return async ({ update }) => {
						await update();
						creating = false;
					};
				}}
			>
				<label>
					Form Add TODO example:
					<input
						name="description"
						autocomplete="off"
						disabled={creating}
						value={form?.description ?? ''}
					/>
				</label>
			</form>

			<ul class="list-disc">
				{#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
					<li in:fly={{ y: 20 }} out:slide>
						<form
							method="POST"
							action="?/delete"
							use:enhance={() => {
								deleting = [...deleting, todo.id];

								return async ({ update }) => {
									await update();

									deleting = deleting.filter((id) => id !== todo.id);
								};
							}}
						>
							<input type="hidden" name="id" value={todo.id} />
							<p>
								{todo.description}
							</p>
							<button aria-label="Mark as complete"> Delete </button>
						</form>
					</li>
				{/each}
			</ul>
		</div>
        <div>
            <label>
                Via Input Keydown Add TODO Example:
                <input name="description" type="text" autocomplete="off" on:keydown={async(e) => {
                    if (e.key !== 'Enter') return;

                    const description = e.currentTarget.value;

                    const response = await fetch('/api/todo', {
                        method: 'POST',
                        body: JSON.stringify({ description }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    const { id } = await response.json();

                    data.todos = [...data.todos, {
                        id,
                        description
                    }]

                    e.currentTarget.value = '';
                }}/>
            </label>
        </div>
	</div>
</div>
