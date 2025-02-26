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
        <svg in:fly={{ y: -20 }} fill="#D6D5C9" width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" stroke="#D6D5C9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="matrix(1,0,0,1,-1024,-192)"> <rect id="Icons" x="0" y="0" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1" transform="matrix(1.50868,0,0,1.01217,6.67804,191.698)"> <g transform="matrix(0.149202,0,0,0.173437,664.206,42.142)"> <rect x="103.288" y="8.535" width="212.447" height="34.133" style="fill-rule:nonzero;"></rect> </g> <g transform="matrix(0.149202,0,0,0.173437,664.345,27.4)"> <rect x="103.288" y="8.535" width="212.447" height="34.133" style="fill-rule:nonzero;"></rect> </g> <g transform="matrix(0.149202,0,0,0.173437,664.345,12.658)"> <rect x="103.288" y="8.535" width="212.447" height="34.133" style="fill-rule:nonzero;"></rect> </g> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)"> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> </g> <g id="coffee-bean-filled"> </g> <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)"> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> </g> <g id="clipboard"> </g> <g transform="matrix(1,0,0,1,128.011,1.35415)"> <g id="clipboard-paste"> </g> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g> </g></svg>
    {:else}
        <svg in:fly={{ y: -20 }} fill="#D6D5C9" width="64px" height="64px" viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" stroke="#D6D5C9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Icons" x="-448" y="-64" width="1280" height="800" style="fill:none;"></rect> <g id="Icons1" serif:id="Icons"> <g id="Strike"> </g> <g id="H1"> </g> <g id="H2"> </g> <g id="H3"> </g> <g id="list-ul"> </g> <g id="hamburger-1"> </g> <g id="hamburger-2"> </g> <g id="list-ol"> </g> <g id="list-task"> </g> <g id="trash"> </g> <g id="vertical-menu"> </g> <g id="horizontal-menu"> </g> <g id="sidebar-2"> </g> <g id="Pen"> </g> <g id="Pen1" serif:id="Pen"> </g> <g id="clock"> </g> <g id="external-link"> </g> <g id="hr"> </g> <g id="info"> </g> <g id="warning"> </g> <g id="plus-circle"> </g> <g id="minus-circle"> </g> <g id="vue"> </g> <g id="cog"> </g> <g id="logo"> </g> <path id="times" d="M32.033,29.19l15.55,-15.55l2.863,2.863l-15.55,15.55l15.55,15.55l-2.863,2.863l-15.55,-15.55l-15.55,15.55l-2.863,-2.863l15.55,-15.55l-15.55,-15.55l2.863,-2.863l15.55,15.55Z"></path> <path d="M32.033,29.19l15.55,-15.55l2.863,2.863l-15.55,15.55l15.55,15.55l-2.863,2.863l-15.55,-15.55l-15.55,15.55l-2.863,-2.863l15.55,-15.55l-15.55,-15.55l2.863,-2.863l15.55,15.55Z"></path> <g id="radio-check"> </g> <g id="eye-slash"> </g> <g id="eye"> </g> <g id="toggle-off"> </g> <g id="shredder"> </g> <g id="spinner--loading--dots-" serif:id="spinner [loading, dots]"> </g> <g id="react"> </g> <g id="check-selected"> </g> <g id="turn-off"> </g> <g id="code-block"> </g> <g id="user"> </g> <g id="coffee-bean"> </g> <g id="coffee-beans"> <g id="coffee-bean1" serif:id="coffee-bean"> </g> </g> <g id="coffee-bean-filled"> </g> <g id="coffee-beans-filled"> <g id="coffee-bean2" serif:id="coffee-bean"> </g> </g> <g id="clipboard"> </g> <g id="clipboard-paste"> </g> <g id="clipboard-copy"> </g> <g id="Layer1"> </g> </g> </g></svg>
    {/if} 
    </button>
    <nav class="{isCollapsed ? 'collapsed' : ''}">
        <a href="/">Home</a>
        <a href="/snek">Snek</a>
        <a href="/ai">AI</a>
        <a href="https://github.com/dlanaras" target="_blank">Gäthöb</a>
        <a href="/aboutme">About Me</a>
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