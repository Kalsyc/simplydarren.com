<script lang="ts">
  import HomeIntroSection from '$lib/components/home/HomeIntroSection.svelte';
  import ProjectSection from '$lib/components/projects/ProjectSection.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Darren Sim</title>
</svelte:head>

<div class="home-container" in:fade>
  <HomeIntroSection />
  <h1>My Latest Projects</h1>
  <ProjectSection limit={4} />
</div>

<style></style>
