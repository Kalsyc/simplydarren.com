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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .link:hover {
    opacity: 0.5;
    cursor: pointer;
  }
</style>
