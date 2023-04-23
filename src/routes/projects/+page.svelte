<script lang="ts">
  import ProjectSection from '$lib/components/projects/ProjectSection.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Darren Sim | Projects</title>
</svelte:head>

<div class="projects-container" in:fade>
  <h1>My Projects</h1>
  <ProjectSection />
</div>

<style>
</style>
