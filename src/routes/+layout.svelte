<script lang="ts">
    import HeaderDesktop from "../components/header-desktop.svelte";
    import HeaderMobile from "../components/header-mobile.svelte";
    $: innerWidth = 0;
    function isMobile(w: number) {
        return w <= 1000;
    }
</script>
<svelte:window bind:innerWidth/>

<div id="body">
    {#if isMobile(innerWidth)}
        <HeaderMobile />
    {:else}
        <HeaderDesktop />
    {/if}
    <slot/>
</div>
