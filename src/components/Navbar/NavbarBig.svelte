<script>
  import { Link } from "svelte-routing";

  import CartButton from "../Cart/CartButton.svelte";
  import LoginLink from "../LoginLink.svelte";

  import { links } from "../../constants/links";
</script>

<nav class="navbar">
  <nav class="nav-container">
    <nav class="nav-center">
      <ul class="nav-links">
        {#each links as link}
          <li>
            <Link to={link.url}>{link.text}</Link>
          </li>
        {/each}
      </ul>
      <Link class="nav-logo big-logo" to="/">
        <img class="logo" src="/assets/images/logo.svg" alt="razers logo" />
      </Link>
      <div class="nav-aside">
        <LoginLink />
        <CartButton />
      </div>
    </nav>
  </nav>
</nav>
