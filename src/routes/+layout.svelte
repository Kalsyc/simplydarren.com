<script lang="ts">
  import Header from '$lib/components/header/Header.svelte';
  import { getItemInLocal } from '$lib/services/localStorage.service';

  const dataTheme = getItemInLocal('data-theme');
  if (dataTheme) {
    document.documentElement.setAttribute('data-theme', dataTheme ? 'Dark' : '');
  }
</script>

<div class="layout-div">
  <div class="header-div">
    <Header />
  </div>
  <div class="content-div">
    <slot />
  </div>
</div>

<style>
  .layout-div {
    height: 100%;
    width: 100%;
  }
</style>
