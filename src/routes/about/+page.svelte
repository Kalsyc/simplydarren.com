<script lang="ts">
  import AboutIntroSection from '$lib/components/about/AboutIntroSection.svelte';
  import TimelineSection from '$lib/components/about/TimelineSection.svelte';
  import WorkExperienceSection from '$lib/components/about/WorkExperienceSection.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Darren Sim | About</title>
</svelte:head>

<div in:fade>
  <AboutIntroSection />
  <WorkExperienceSection />
  <TimelineSection />
</div>
