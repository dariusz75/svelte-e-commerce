<script>
  import { Link } from 'svelte-routing';

  import Hero from '../components/Hero.svelte';
</script>

<Hero>
  <Link class="btn btn-primary btn-hero" to="/products">shop now</Link>
</Hero>
