<script lang="ts">
  import EducationSection from '$lib/components/about/EducationSection.svelte';
  import PersonalInfoSection from '$lib/components/about/PersonalInfoSection.svelte';
  import SkillsSection from '$lib/components/about/SkillsSection.svelte';
  import WorkExperienceSection from '$lib/components/about/WorkExperienceSection.svelte';
</script>

<svelte:head>
  <title>Darren Sim | Resume</title>
</svelte:head>

<a class="resume-anchor" href="https://drive.google.com/file/d/1uallXZj8wpoAAIBwjaZCR1lQHsHU78Ec/view?usp=sharing"
  >Prefer a pdf version? Click here instead!</a
>
<PersonalInfoSection />
<SkillsSection />
<WorkExperienceSection />
<EducationSection />

<style>
  .resume-anchor {
    -webkit-animation: flickerAnimation 2s infinite;
    -moz-animation: flickerAnimation 2s infinite;
    -o-animation: flickerAnimation 2s infinite;
    animation: flickerAnimation 2s infinite;
    text-align: center;
  }
  .resume-anchor:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-webkit-keyframes flickerAnimation {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
