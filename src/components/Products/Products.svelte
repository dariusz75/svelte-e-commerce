<script>
  import { onMount, onDestroy } from 'svelte';

  import defaultProductsStore from '../../stores/defaultProductsStore';

  let localProducts = [];

  onMount(() => {
    defaultProductsStore.subscribe((value) => {
      localProducts = value;
    });
    console.log(localProducts);
  });
</script>

<h1>products component</h1>
{#each localProducts as product}
  <h2>{product.title}</h2>
{/each}
