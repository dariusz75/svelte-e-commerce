<script>
  import { Link } from "svelte-routing";
  import { fly, fade } from "svelte/transition";

  import { links } from "../../constants/links";
  import { globalStore } from "../../stores/globalStore";

  import LoginLink from "../LoginLink.svelte";

  let closeSidebar = globalStore.toggleItem;
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar" transition:fade={{ delay: 400 }}>
    <div class="sidebar-header">
      <button class="btn-close" on:click={() => closeSidebar("sidebar", false)}>
        <i class="fas fa-window-close" />
      </button>
    </div>
    <img
      class="logo sidebar-logo"
      src="/assets/images/logo.svg"
      alt="razors logo"
    />
    <ul class="sidebar-links">
      {#each links as link}
        <li>
          <Link to={link.url} on:click={() => closeSidebar("sidebar", false)}>
            {link.text}
          </Link>
        </li>
      {/each}
      <li><LoginLink /></li>
    </ul>
  </div>
</div>
