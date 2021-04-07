<script>
  import { Link } from "svelte-routing";

  import CartButton from "../Cart/CartButton.svelte";

  import { globalStore } from "../../stores/globalStore";

  let openSidebar = globalStore.toggleItem;
</script>

<nav class="navbar">
  <div class="nav-center">
    <button
      class="btn-sidebar-toggle"
      on:click={() => openSidebar("sidebar", true)}
    >
      <i class="fas fa-bars" />
    </button>
    <Link class="nav-logo" to="/">
      <img class="logo" src="/assets/images/logo.svg" alt="razers logo" />
    </Link>
    <CartButton />
  </div>
</nav>
