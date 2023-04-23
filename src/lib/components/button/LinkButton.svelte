<script lang="ts">
  export let href: string;
</script>

<a class="link" {href}>
  <slot />
</a>

<style>
  .link {
    background-color: var(--action-color);
    color: var(--action-font-color);
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .link:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
