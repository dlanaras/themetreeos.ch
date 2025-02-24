<script lang="ts">
    const hardcode = `S C N N I U Q Y H V C K A K M X C M I N Y H Z
Q D K K G Y Y P D D S Z X U X T F W L Q G D W
T I S T O P W A S T I N G Y O U R T I M E B E
X O A N B N I G J S L H U W J S C N B N F A P
R A J I H Z H P U R N N R M R X V O T R D K O
S D Y E O E X J L R Y W A T P D U X C K T R I
B C F G Z P H K K R T M H D Z B T W R P R B Y
B X S E U I G E D R E T Z Y F X S S G E C A T
P Q F K H P F B H G Q R F V I G B P X D R G I
R W E X K F U X U E Y S A A B U T U P S X H X
N C R K F M U V H H H H E E G D R V C C U A W
X H F V T Y R X I V A A X W N S G U J W G S A
Q K W M E O T G F I B Z W B W T U I J O H I J
Z O L I P I P W K D L V X R M S N P A J R L R
Y D G E M D N U O F E V A H U O Y O A J P W A
M R I W C C P Q V M O F V B M B B I U K I P A`;
    let tokenIndices : Array<number> = $state([]);
    let is1984 = $state(false);
    let theBackgroundClass = $state("image-background");
    
    function changeBackground() {
        if(!is1984) {
            theBackgroundClass = "nineTeenEightyFourBackground";
        } else {
            theBackgroundClass = "image-background";
        }
        is1984 = !is1984;
    }

    function strikeToken(index: number): void {
        console.log(tokenIndices);
        if(!tokenIndices.includes(index)) {
            tokenIndices.push(index);
        }
    }

    function unstrikeToken(index: number): void {
        let toUnstrike = tokenIndices.findIndex(i => i === index);
        if(toUnstrike !== -1) {
            tokenIndices.splice(toUnstrike, 1)
        }
    }
</script>

<div class="main">
    <div class={theBackgroundClass}>
        <h1>THE best website you have ever seen</h1>
    </div>

    <div class="content">
        <h2>Yes you read that right</h2>
        <div>
            <div class="secret">
                {#each hardcode as token, index}
                    {#if token.trim() === ""}
                        &ensp;
                    {:else if tokenIndices.includes(index)}
                        <button class="secret-token strikethrough" onclick={() => unstrikeToken(index)}>{token}</button>
                    {:else}
                        <button class="secret-token" onclick={() => strikeToken(index)}>{token}</button>
                    {/if}
                {/each}
            </div>
        </div>
        <h3>But bet you couldn't read that, right?</h3>
        <div id="nineteen-eighty-four">
            <button onclick={() => changeBackground()}>
                <img src="/pictures/1984.gif" alt="1984" height="31" width="88">
            </button>
        </div>
    </div>
</div>

<style>
.image-background h1, .nineTeenEightyFourBackground h1 {
    font-size: 2.4rem;
    width: 100%;
}

.image-background {
    background-image: url("/pictures/joebiden.jpg");
}

.nineTeenEightyFourBackground {
    background-image: url("/pictures/burnie.gif");
}

.image-background, .nineTeenEightyFourBackground {
    width: 100%;
    height: 20rem;
    background-size: 100% 100%;
}

.secret {
    /*23 letters of 1 rem + 0.5rem margin */
    max-width: 47rem;
    min-width: 47rem;
    margin: 0 auto;
}

.secret-token, #nineteen-eighty-four button{
    background: none;
    border: none;
    color: inherit;
    padding: 0;
    cursor: pointer;
    outline: inherit;
}

.secret-token {
    font-size: 1rem;
    margin: 0.25rem
}

.strikethrough {
    text-decoration-line: line-through;
    text-decoration-thickness: 4px;
    text-decoration-color: black;
}

.main {
    display: flex;
    flex-direction: column;
    height: 100%;
}

h1, h2, h3 {
    text-align: center;
}

.content {
    width: 100%;
    height: 50%;
}

.content > div:not(#nineteen-eighty-four) {
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 1000px;
    background-color: #902923;
}

#nineteen-eighty-four {
    width: 100%;
    display: flex;
    justify-content: center;
}

#nineteen-eighty-four button:hover {
    cursor: pointer;
}
</style>