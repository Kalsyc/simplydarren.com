<script lang="ts">
  import { page } from '$app/stores';
  import { projectsObj } from '$lib/constants/projects';
  import { fade } from 'svelte/transition';

  const projectInfo = projectsObj[$page.params['projectId']];

  export let data: {
    slug: string;
    post: string;
  };
</script>

<svelte:head>
  <title>{projectInfo.title}</title>
</svelte:head>

<div in:fade>
  <a href="/projects">{'<'} Back</a>
  {@html data.post}
</div>

<style>
</style>
