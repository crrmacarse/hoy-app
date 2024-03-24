<script lang="ts">
    let number: number;

    const roll = async () => {
        const response = await fetch('/api/roll');

        number = await response.json();
    }
</script>

<button on:click={roll}>Roll the dice</button>

{#if  number !== undefined}
    <p>You rolled a {number}</p>
{/if}