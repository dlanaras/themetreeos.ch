<script lang="ts">
    import { onMount } from "svelte";
    $: innerWidth = 0;
    $: innerHeight = 0;
    $: tolled = false;
    let bellman : HTMLAudioElement | undefined;
    function bell() {
        tolled = !tolled;
        bellman?.play();
    }
    let url = '';
    onMount(() => url = window.location.origin);
</script>
<svelte:window bind:innerWidth bind:innerHeight/>

<div class="wrapper">
    <h1><marquee direction="right">About Me</marquee></h1>
    <div class="content">
        <h2>Name:</h2>
        <p>themetreeos.xyz</p>
        <h2>Nicknames:</h2>
        <p>www.themetreeos.xyz && lananas.themetreeos.xyz</p>
        <h2>Height</h2>
        <p>{innerHeight} Pixels</p>
        <h2>Width</h2>
        <p>{innerWidth} Pixels</p>
        <h2>Paths</h2>
        <p>/home && /snek && /ai && /aboutme</p>
        <h2>Life expectency</h2>
        <p id="bell">Until the bell tolls...
            <button onclick={bell}>
               <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#D6D5C9"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
            </button>
            {#if tolled}
                Nah I'm dead fr fr 💀.
            {/if}
            <audio bind:this="{bellman}">
                <source src="/sounds/bell.mp3">
            </audio>
        </p>
        <h2>Profession</h2>
        <p>Entertainer</p>
        <h2>Schedule</h2>
        <p>24/7 (surely)</p>
        <h2>Interests</h2>
        <p>Serving content, existing and getting visited</p>
        <h2>How I look like</h2>
        <iframe src="{url}" title="recursion"></iframe>
        <h2>Final thoughts</h2>
        <p>Error: Object is possibly 'null' at <a href="/aboutme#null"> aboutme/+page.svelte:37</a></p>
    </div>
</div>

<div id="null">
    37: let finalthoughts = document.querySelector("p.finalthoughts"); 
</div>

<style>
button {
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
    outline: inherit;
}

button:hover {
    animation: flipper 2s forwards;
}

@keyframes flipper {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
}

.wrapper h1 {
    text-align: center;
}

.content {
    margin: 0 auto;
    padding: 1rem 1rem;
    max-width: 1000px;
    background-color: #902923;
}

.content p {
    margin-left: 2%;
}

#null {
    margin-top: 50%;
}

#bell {
    font-style: italic;
}

iframe {
    width: 100%;
    height: 1000px;
}
</style>