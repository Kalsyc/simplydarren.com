<script lang="ts">
  import Header from '$lib/components/header/Header.svelte';
</script>

<div class="layout">
  <header class="layout__section">
    <Header />
  </header>
  <main class="layout__main">
    <slot />
  </main>
</div>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1000px;
    margin: 0 auto;
  }

  .layout__section {
    height: var(--navbar-height);
    width: 100%;
    border-bottom: 0.1rem solid var(--secondary-color);
    position: fixed;
    background-color: var(--primary-color);
  }

  .layout__main {
    margin-top: var(--navbar-height);
    width: 100%;
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 600px) {
    .layout__section {
      position: relative;
      border-bottom: none;
      height: fit-content;
      padding: 1rem 2rem;
    }

    .layout__main {
      margin-top: 0;
    }
  }
</style>
