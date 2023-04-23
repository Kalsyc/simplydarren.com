<script lang="ts">
  import EducationSection from '$lib/components/about/EducationSection.svelte';
  import PersonalInfoSection from '$lib/components/about/PersonalInfoSection.svelte';
  import SkillsSection from '$lib/components/about/SkillsSection.svelte';
  import WorkExperienceSection from '$lib/components/about/WorkExperienceSection.svelte';
  import LinkButton from '$lib/components/button/LinkButton.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Darren Sim | Resume</title>
</svelte:head>

<div in:fade>
  <div class="resume-link">
    <LinkButton href="https://drive.google.com/file/d/1uallXZj8wpoAAIBwjaZCR1lQHsHU78Ec/view?usp=sharing">PDF Version</LinkButton>
  </div>
  <PersonalInfoSection />
  <SkillsSection />
  <WorkExperienceSection />
  <EducationSection />
</div>

<style>
  .resume-link {
    text-align: center;
    margin: 1rem 0;
  }

  @media screen and (min-width: 600px) {
    .resume-link {
      text-align: left;
    }
  }
</style>
