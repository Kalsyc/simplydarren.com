<script lang="ts">
  import { page } from '$app/stores';
  import GameFrame from '$lib/components/games/GameFrame.svelte';
  import { games } from '$lib/constants/games';

  const gameInfo = games[$page.params['gameId']];
</script>

<svelte:head>
  <title>{gameInfo.headTitle}</title>
</svelte:head>
<GameFrame {gameInfo} />
