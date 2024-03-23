<script>
    export let data;
</script>

<form method="POST" action="?/create">
    <label>
        add a todo:
        <input name="description" autocomplete="off" />
    </label>
</form>

<ul class="todos">
    {#each data.todos as todo (todo.id)}
        <li>
            <form method="POST" action="?/delete">
                <input type="hidden" name="id" value={todo.id} />
                <p>
                    {todo.description}
                </p>
                <button aria-label="Mark as complete">
                    Delete
                </button>
            </form>
        </li>
    {/each}
</ul>