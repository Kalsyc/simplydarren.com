<script lang="ts">
  import { page } from '$app/stores';
  import { projectsObj } from '$lib/constants/projects';

  const projectInfo = projectsObj[$page.params['projectId']];
</script>

<svelte:head>
  <title>{projectInfo.title}</title>
</svelte:head>

<h1>Description coming soon!</h1>
<div>{projectInfo.title}</div>

<style>
</style>
