<script>
  export let title = '';

  import defaultProductsStore from '../../stores/defaultProductsStore';

  import Product from './Product.svelte';
  import Loading from '../Loading.svelte';
  import Products from './Products.svelte';

  $: featuredProducts = $defaultProductsStore.filter(
    (product) => product.featured
  );
</script>

{#if featuredProducts.length === 0}
  <Loading />
{:else}
  <section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
      {#each featuredProducts as product (product.id)}
        <Product {product} />
      {/each}
    </div>
  </section>
{/if}
