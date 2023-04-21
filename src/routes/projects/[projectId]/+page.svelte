<script lang="ts">
  import { page } from '$app/stores';
  import { projectsObj } from '$lib/constants/projects';

  const projectInfo = projectsObj[$page.params['projectId']];

  export let data: {
    slug: string;
    post: string;
  };
</script>

<svelte:head>
  <title>{projectInfo.title}</title>
</svelte:head>

<a href="/projects">{'<'} Back</a>
{@html data.post}

<style>
</style>
