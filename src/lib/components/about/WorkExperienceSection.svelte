<script lang="ts">
  import { experienceInfoArr } from '$lib/constants/info';
</script>

<div class="work-experience-title">
  <h1>My Work Experience</h1>
</div>
{#each experienceInfoArr as info}
  <div class="work-experience">
    <h2>{info.company}</h2>
    <h3>
      {info.designation} |
      <span>{info.dateRange}</span>
    </h3>
    <ul>
      {#each info.desc as desc}
        <li>{desc}</li>
      {/each}
    </ul>
    <br />
  </div>
{/each}

<style>
  .work-experience-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }

  .work-experience {
    border-bottom: 0.2rem solid var(--secondary-color);
  }

  @media screen and (min-width: 600px) {
    .work-experience-title {
      flex-direction: row;
    }
  }
</style>
