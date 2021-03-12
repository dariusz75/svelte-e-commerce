<script>
  import { Link } from 'svelte-routing';
  // props
  export let id;

  import defaultProductsStore from '../stores/defaultProductsStore';
  import Loading from '../components/Loading.svelte';
  import Products from '../components/Products/Products.svelte';

  $: product = $defaultProductsStore.find(
    (product) => product.id === parseInt(id)
  );
</script>

<svelte:head>
  <title>
    {!product ? 'single product' : product.title}
  </title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <Link class="btn btn-primary" to="/products">back to products</Link>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            console.log('add to card');
          }}>add to cart</button
        >
      </article>
    </div>
  </section>
{/if}
