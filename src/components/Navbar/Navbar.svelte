<script>
  import NavbarSmall from './NavbarSmall.svelte';
  import NavbarBig from './NavbarBig.svelte';

  import { globalStore } from '../../stores/globalStore';

  let screenWidth;
  $: if (screenWidth > 992) {
    globalStore.toggleItem('sidebar', false);
  }
</script>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth > 992}
  <NavbarBig />
{:else}
  <NavbarSmall />
{/if}
