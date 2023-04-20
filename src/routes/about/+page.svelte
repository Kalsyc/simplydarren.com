<script lang="ts">
  import AboutIntroSection from '$lib/components/about/AboutIntroSection.svelte';
  import TimelineSection from '$lib/components/about/TimelineSection.svelte';
  import WorkExperienceSection from '$lib/components/about/WorkExperienceSection.svelte';
</script>

<svelte:head>
  <title>Darren Sim | About</title>
</svelte:head>

<AboutIntroSection />
<WorkExperienceSection />
<a class="work-experience-title__anchor" href="about/resume">{'>'} Click here to see a more detailed resume!</a>
<TimelineSection />

<style>
  .work-experience-title__anchor {
    text-decoration: underline;
  }

  .work-experience-title__anchor:hover {
    cursor: pointer;
    opacity: 50%;
  }
</style>
