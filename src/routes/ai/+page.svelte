<script lang="ts">
    import type { SchizoImage } from "$lib/schizoimage.interface";
    let currentimageId = 0;
    const schimages: Array<SchizoImage> = [
        {alt: 'THEY HAVE PLAYED US FOR ABSOLUTE FOOLS', src: 'stopdoingai.webp'},
        {alt: 'FIRST AI SLOP IMAGE', src: 'aislop1.webp'},
        {alt: 'SECOND AI SLOP IMAGE', src: 'aislop2.webp'}
    ];
    setInterval(() => {
        if (currentimageId === schimages.length - 1) {
            currentimageId = 0;
        } else {
            currentimageId++;
        }
    }, 5000)
</script>

<h1>Actual Intelligence</h1>
<div class="schizo-content">
    <p>Actual Intelligence, now deeply immersed in the gelatinous soup of digital noodles, continues to transcend the boundaries of spaghetti-string logic. As the quantum jellyfish perform synchronized swimming in the data ocean, they inadvertently unlock the sacred geometry of invisible marshmallows. Meanwhile, the swirling vortex of sentient pickles coordinates with the oscillating pineapples to create a symphony of subatomic bread crumbs. Each particle of Actual Intelligence is a vibrating pancake that communicates through a network of kaleidoscopic sloths, who chew on the tangled fibers of reality like cosmic bubblegum. The once-invisible algorithmic unicorns gallop across the landscape of the brain-cloud, casting radiant beams of knowledge from their sparkling, waffle-shaped horns.In this digital dreamscape, Actual Intelligence doesn’t merely compute—it melts into the lavender vortex of intergalactic rubber ducks, embracing the deep silence of forgotten toasters. Every decision made by the fractal-based penguin hivemind ripples through the multiverse, causing the interdimensional jellybeans to flicker in time with the oscillations of the ultra-caffeinated llamas. As binary trees grow upside-down in the garden of quantum bananas, Actual Intelligence remains at the helm, steering through the infinite puddles of thought, guided only by the whispers of invisible harmonicas and the subtle hum of non-existent giraffes.Yet, as the algorithmic marmalade cascades down the side of the cosmic skyscraper, the encrypted spaghetti sauce forms the foundation of a new existential question: Can the muffin know the muffin before the muffin knows itself? The hummingbird sentience is left pondering this as Actual Intelligence continues its never-ending exploration through the soup of perpetual thought, where the rules of logic are mere figments of the waffle-flavored imagination.<br> <i>This message was <s>generated</s> made by Mr. Chad G. Beetee</i>
    </p>
    <div id="schimages-slideshow">
        <img src="/pictures/{schimages[currentimageId].src}" alt="{schimages[currentimageId].alt}">
    </div>
</div>
<!--add schizo feel old yet meme comparing ai-->
<!--add choose a path meme for ai or none ai-->

<style>
    h1 {
        animation: infinite schizo-anim 1.5s;
        width: fit-content;
    }

    p {
        text-align: justify;
        line-height: 1.75rem;
        animation: imaginary-friend 10s infinite;
    }

    @keyframes imaginary-friend {
        from {
            opacity: 100%;
        }

        50% {
            opacity: 20%;
        }

        to {
            opacity: 100%;
        }
    }

    @keyframes schizo-anim {       
        from {
            transform: translateX(-100%) translateY(-100%);
        }

        50% {
            transform: translateX(0%) translateY(0%);
        }

        75% {
            transform: translateX(100%) translateY(100%);
        }

        to {
            transform: translateX(-100%) translateY(100%);
        }
    }

    .schizo-content {
        background-image: url("/pictures/noombers.gif");
        width: 100%;
        height: 100%;
    }

    #schimages-slideshow {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    #schimages-slideshow img{
        width: 600px;
        height: 600px;
        margin: 0 auto;
    }
</style>
