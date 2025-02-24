<script>
    let ssss = $state(false);
    let clicks = $state(0);
    function increment() {
        if(clicks === 0) {
            ssss = true;
        }
        clicks++;
    }
</script>

<button onclick={increment} aria-label="scuffed-button">
    <img src="/pictures/scuffedman.png" class="head" alt="scuffed-snek-face">
    {#each {length: clicks}, index}
        <img src="/pictures/scuffedtail.png" class="tail" alt="scuffed-snek-tail" style="z-index: {index}; right: {(index+1)*5}rem">
        <!--TODO: add chomp.mp3-->
    {/each}
</button>
{#if ssss}
    <hr>
    <h1><a href="https://github.com/dlanaras/scuffed-man/releases/tag/v1.0.1" target="_blank">SSSSSSSSSSSSSSSSSSSSSSSSSSsscuffed</a></h1>
{/if}

<style>
    button {
        background: none;
        border: none;
        color: inherit;
        padding: 0;
        cursor: pointer;
        outline: inherit;
    }

    .head {
        z-index: 100;
        position: relative;
    }

    .tail {
        position: relative;
        margin: 0;
        
    }
</style>