<script lang="ts">
  import LinkButton from '$lib/components/button/LinkButton.svelte';
  import githubIcon from '$lib/assets/img/github-icon.png';
  import linkedin from '$lib/assets/img/linkedin-icon.png';
</script>

<div class="links">
  <a class="links__github" href="https://github.com/Kalsyc">
    <img class="github__icon" alt="" src={githubIcon} />
  </a>
  <a class="links__linkedin" href="https://www.linkedin.com/in/kalsyc/">
    <img class="linkedin__icon" alt="" src={linkedin} />
  </a>
  <LinkButton href="about/resume">Resume</LinkButton>
</div>

<style>
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .links__github,
  .links__linkedin {
    display: inline-flex;
    position: relative;
    object-fit: fill;
    height: 48px;
    width: 48px;
  }

  .github__icon,
  .linkedin__icon {
    height: auto;
    width: auto;
    filter: invert(var(--invert-value));
  }

  .github__icon:hover,
  .linkedin__icon:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  @media screen and (min-width: 600px) {
    .links {
      justify-content: left;
      gap: 2rem;
    }
  }
</style>
