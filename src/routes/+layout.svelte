<script lang="ts">
    import HeaderDesktop from "../components/header-desktop.svelte";
    import HeaderMobile from "../components/header-mobile.svelte";
    $: innerWidth = 0;
    let cursor: HTMLDivElement | undefined;
    function isMobile(w: number) {
        return w <= 1000;
    }
    const moveCursor = (e: MouseEvent) => {
        if(cursor) {
            // 150 is width of image
            // -70px is position where cursor aligns with finger 
            const x = e.clientX -70;
            const y = e.clientY;
            cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    }
</script>
<svelte:window bind:innerWidth on:mousemove={moveCursor}/>

<div id="body">
    {#if isMobile(innerWidth)}
        <HeaderMobile />
    {:else}
        <div class="cursor" bind:this="{cursor}"></div>
        <HeaderDesktop />
    {/if}
    <slot/>
</div>

<style>
    .cursor {
        position: absolute;
        background-image: url("/pictures/newcursor.png");
        background-size: cover;
        width: 150px;
        height: 200px;
        pointer-events: none;
        z-index: 1000;
    }

    button:hover {
        cursor: pointer;
    }
</style>