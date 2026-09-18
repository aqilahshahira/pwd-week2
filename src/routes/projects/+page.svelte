<script>
    import Card from '$lib/Card.svelte';
    let {data} = $props();
</script>

<h2>Projects</h2>
{#each data.projects as p}
    <Card title={p.title} summary={p.summary} href={`/projects/${p.slug}`}/>
{:else}
    <p class="card">No projects are registered yet.</p>
{/each}