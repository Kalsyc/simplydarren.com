<script lang="ts">
  import type { GameInfo } from '$lib/constants/games';

  export let gameInfo: GameInfo;
  let frame: HTMLIFrameElement;
</script>

<div class="iframe-container">
  <iframe
    bind:this={frame}
    src={gameInfo.gameBuildLink}
    name={gameInfo.frameName}
    scrolling="no"
    frameBorder="1"
    title={gameInfo.frameTitle}
    class="iframe-container__frame"
    allowFullScreen={true}
  />
</div>

<style>
  .iframe-container {
    position: relative;
    width: 100%; /* Adjust this value according to your desired container width */
    padding-bottom: 56.25%; /* Aspect ratio for 1280x720 (720 / 1280 * 100 = 56.25%) */
    overflow: hidden;
  }

  .iframe-container__frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 1280px;
    height: 720px;
    border: none;
  }
</style>
