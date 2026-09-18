<script>
    let { data } = $props();
    let memo = $state('');

    $effect(() => {
        if (data.slug === 'memo') {
            const saved = localStorage.getItem('memo');
            if (saved) memo = saved;
        }
    });

    function save() {
        localStorage.setItem('memo', memo);
        alert('Saved');
    }
</script>

<h2>{data.item.title}</h2>
<p>{data.item.body}</p>

{#if data.slug === 'memo'}
    <textarea rows="6" bind:value={memo} class="card" style="width:100%"></textarea>
    <button onclick={save}>Save Memo</button>
    <p style="opacity:.6">Stored locally in the browser only.</p>
{/if}

