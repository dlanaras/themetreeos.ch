<script lang="ts">
    $: innerWidth = 0;
    $: innerHeight = 0;
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
        <p>/home && /snek && /aboutme</p>
        <h2>Life expectency</h2>
        <p>1 Year</p>
        <h2>Job</h2>
        <p>Entertainer</p>
        <h2>Schedule</h2>
        <p>24/7</p>
        <h2>Looks</h2>
        <iframe src="https://themetreeos.xyz/"></iframe>
        <h2>Final thoughts</h2>
        <p>Error: Object is possibly 'null' at <a href="/aboutme#null"> aboutme.component.html:25</a></p>
    </div>
</div>

<div id="null">
    25: let finalthoughts = document.querySelector("p.finalthoughts"); 
</div>

<style>
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

iframe {
    width: 100%;
    height: 100%;
}
</style>