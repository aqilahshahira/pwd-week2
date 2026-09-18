<script>
    let name = $state('');
    let welcome = $derived(name ? `Hello, ${name}!` : 'Welcome!');

    function randomize() {
        const msgs = [
            'Web development is interesting!',
            'Master SvelteKit soon',
            'Deploy with Vercel!'
        ];
        alert(msgs[Math.floor(Math.random() * msgs.length)]);
    }
</script>

<h1>{welcome}</h1>

<label>
    Your name: <input placeholder="type your name" bind:value={name} />
</label>
<p>Preview: <strong>{name || '(Waiting for input)'}</strong></p>

<button onclick={randomize}>Random Message</button>