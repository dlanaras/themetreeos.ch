<script>
    import { fly } from "svelte/transition";
    let isCollapsed = $state(true);
    function toggle() {
        isCollapsed = !isCollapsed;
    }
</script>

<div>
    <button onclick={toggle} id="nav-toggle" aria-label="Navbar Toggle">
        {#if isCollapsed}
        <svg
            in:fly={{ y: -20 }}
            id="burger"
            width="32px"
            height="32px"
            viewBox="0 0 12 12"
            enable-background="new 0 0 12 12"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <rect fill="#D6D5C9" height="1" width="11" x="0.5" y="5.5" class="top" />
                <rect fill="#D6D5C9" height="1" width="11" x="0.5" y="2.5" class="middle" />
                <rect fill="#D6D5C9" height="1" width="11" x="0.5" y="8.5" class="bottom" />
            </g>
        </svg>
    {:else}
        <svg
            in:fly={{ y: -20 }}
            id="burger"
            width="32px"
            height="32px"
            viewBox="0 0 12 12"
            enable-background="new 0 0 12 12"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><polygon
                fill="#D6D5C9"
                points="12,0.7070313 11.2929688,0 6,5.2929688 0.7070313,0 0,0.7070313 5.2929688,6 0,11.2929688   0.7070313,12 6,6.7070313 11.2929688,12 12,11.2929688 6.7070313,6 "
            /></svg
        >
    {/if} 
    </button>
    <nav class="{isCollapsed ? 'collapsed' : ''}">
        <a href="/">Home</a>
        <a href="/snek">Snek</a>
        <a href="/ai">AI</a>
        <a href="https://github.com/dlanaras" target="_blank">Gäthöb</a>
        <a href="/about">About</a>
    </nav>
</div>


<style>
    #nav-toggle {
        width: 100%;
        background-color: #A22C29;
        border: #902923 3px solid;
    }

    nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #A22C29;
		flex-direction: row;
		text-align: center;
		width: 100%;
		z-index: 1;
		position: relative;
        flex-direction: column;
		height: 100%;
	}

    nav a {
        background-color: #A22C29;
        width: 100%;
        height: 100%;
        text-align: center;
        border: #902923 3px solid;
        font-size: 2.4rem;
        color: #D6D5C9;
        padding: 0.5rem 1rem;
        text-decoration: none;
    }

    nav a:hover {
        background-color: #0A100D;
        cursor: pointer;
        border-bottom: none;
    }

	.collapsed {
		display: none;
	}
</style>