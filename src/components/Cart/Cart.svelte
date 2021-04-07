<script>
  import { Link } from "svelte-routing";
  import { fly, fade, blur } from "svelte/transition";
  import { globalStore } from "../../stores/globalStore";
  import user from "../../stores/userStore";
  import CartList from "./CartList.svelte";
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 400 }}>
      <!-- cart header -->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => {
            globalStore.toggleItem("cart", false);
          }}
        >
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">your basket</h2>
        <span />
      </div>
      <!-- end of cart header -->

      <CartList />
      <!-- end of cart items -->
      <!-- cart footer -->
      <div class="cart-footer">
        {#if $user.token}
          <Link
            class="btn btn-primary btn-block"
            to="/checkout"
            on:click={() => {
              globalStore.toggleItem("cart", false);
            }}>checkout</Link
          >
        {:else}
          <p class="cart-login">
            in order to checkout please
            <Link
              to="/login"
              on:click={() => {
                globalStore.toggleItem("cart", false);
              }}>login</Link
            >
          </p>
        {/if}
      </div>
      <!-- end of cart footer -->
    </div>
  </div>
</div>
