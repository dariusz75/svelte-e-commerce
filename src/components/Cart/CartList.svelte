<script>
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import CartItem from './CartItem.svelte';
  import cart, { cartTotal } from '../../stores/cartStore';
  import About from '../../pages/About.svelte';
  import App from '../../App.svelte';
  import Cart from './Cart.svelte';
</script>

<section class="cart-items">
  <article>
    {#each $cart as cartItem, index (cartItem.id)}
      <div
        in:fly={{ delay: index + 1 * 500, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip
      >
        <CartItem {...cartItem} />
      </div>
    {:else}
      <h2 class="empty-cart">is empty</h2>
    {/each}
  </article>
  <h3 class="cart-total">total: ${cartTotal}</h3>
</section>
