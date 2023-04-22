<script lang="ts">
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
  import { projects } from '$lib/constants/projects';

  export let limit = -1;
  const projectsArr = projects.slice(0, limit === -1 ? projects.length : limit);
</script>

<div class="projects-container__grid">
  {#each projectsArr as project}
    <ProjectCard projectInfo={project} />
  {/each}
</div>

<style>
  .projects-container__grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media screen and (min-width: 600px) {
    .projects-container__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
      justify-items: center;
    }
  }
</style>
