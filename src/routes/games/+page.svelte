<script lang="ts">
  import LinkButton from '$lib/components/button/LinkButton.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Darren Sim | Games</title>
</svelte:head>

<div class="games-container" in:fade>
  <h1>My Games</h1>
  <p>
    Like the previous iterations of my website, you get to play CULLinary on the browser for free as always :D
    <br />
    <br />
    Ensure that you are using a laptop/desktop and a modern browser like Google Chrome or Firefox as WebGL builds in Unity can work unpredictably with
    other browsers (looking at you Safari...)
    <br />
    <br />
    Warning: As of now, you should probably play this game on a screen that can fit 720p resolution (1280px x 720px). This developer needs time to rebuild
    the game with a more responsive canvas. Alternatively, you can download the game on <a href="https://angryeggplant.itch.io/">itch.io</a>.
    <br />
    <br />
  </p>
  <div class="games-container__links">
    <LinkButton href="games/CULLinary">CULLinary</LinkButton>
    <LinkButton href="games/CULLinary2">CULLinary 2</LinkButton>
  </div>
</div>

<style>
  a:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  .games-container__links {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media screen and (min-width: 600px) {
    .games-container__links {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
</style>
