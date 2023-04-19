<script lang="ts">
  import SimplyDarrenIcon from '$lib/assets/svg/SimplyDarrenIcon.svelte';
  import { getItemInLocal, setItemInLocal } from '$lib/services/localStorage.service';

  // $: {
  //   document.documentElement.setAttribute('data-theme', currentTheme);
  //   setItemInLocal('data-theme', currentTheme);
  // }

  const dataTheme = getItemInLocal('data-theme');
  let isDarkMode = dataTheme == 'Dark';

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'Dark' : '');
    setItemInLocal('data-theme', isDarkMode ? 'Dark' : '');
  }
</script>

<svelte:head>
  <title>Darren Sim</title>
</svelte:head>

<h1>Welcome to simplydarren.com</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<SimplyDarrenIcon />
<button on:click={toggleDarkMode}>Toggle Mode</button>
