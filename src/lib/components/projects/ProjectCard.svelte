<script lang="ts">
  import type { ProjectInfo } from '$lib/constants/projects';

  export let projectInfo: ProjectInfo;
</script>

<a class="img-anchor" href={`/projects/${projectInfo.id}`}>
  {#if projectInfo.isVid}
    <video class="img-anchor__img" autoplay loop muted playsinline poster={projectInfo.gif}>
      <source src={projectInfo.webm} type="video/webm" />
      <source src={projectInfo.mp4} type="video/mp4" />
      <img src={projectInfo.gif} alt={projectInfo.title} title="Your browser does not support the <video> tag" />
    </video>
  {:else}
    <img class="img-anchor__img" alt="" src={projectInfo.img} />
  {/if}
  <div class="img-anchor__project-info">
    <div class="project-info__tag">{projectInfo.tag}</div>
    <div class="project-info__title">{projectInfo.title}</div>
  </div>
  <div class="img-anchor__title--mobile">{projectInfo.title}</div>
</a>

<style>
  .img-anchor {
    width: 300px;
    height: 200px;
    position: relative;
    border: 0.25rem solid var(--secondary-color);
    border-radius: 0.75rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .img-anchor__img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  .img-anchor__title--mobile {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    font-weight: 700;
    padding: 1rem;
    color: whitesmoke;
    border-radius: 0 0 0.5rem 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    transition: 0.5s;
  }

  .img-anchor__project-info {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 2;
    display: flex;
    transition: 0.5s;
    border-radius: 0.5rem;
  }

  .img-anchor__project-info:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .project-info__tag {
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-weight: 700;
    color: whitesmoke;
  }

  .project-info__title {
    align-self: center;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 700;
    color: whitesmoke;
  }

  @media screen and (min-width: 600px) {
    .img-anchor__title--mobile {
      opacity: 0;
    }
  }
</style>
