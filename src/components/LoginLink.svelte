<script>
  import user from "../stores/userStore";
  import { link, Link } from "svelte-routing";

  import {logoutUser} from '../stores/userStore';
  import { globalStore } from "../stores/globalStore";

  // TODO
  // logout func

  const closeSidebar = () => {
    logoutUser();
    globalStore.toggleItem("sidebar", false);
  };
</script>

{#if $user.token}
  <Link class="logout-btn" to={"/"} on:click={closeSidebar}>logout</Link>
{:else}
  <Link to={"/login"} on:click={closeSidebar}>login</Link>
{/if}
