<script>
  import {navigate} from "svelte-routing";
  import globalStore from "../stores/globalStore";
  import loginUser from "../strapi/loginUser";
  import registerUser from "../strapi/registerUser";

  let email = "";
  let password = "";
  let username = "default username";
  let isMember = false;

  $: isEmpty = !email || !password || !username || $globalStore.alert;

  // TODO add alert 

  const toggleMember = () => {
    isMember = !isMember;

    if (!isMember) {
      username = "";
    } else {
      username = "default username";
    }
  };
 
async function handleSubmit() {
  globalStore.toggleItem('alert', true, 'loading data...');

  let user;

  if (isMember) {
    user = await loginUser({email, password});
  } else {
      user = await registerUser({ email, password, username });
    }

  if (user) {
    globalStore.toggleItem('alert', true, 'welcome to the shop');
    navigate('/products');
    return
  }

  globalStore.toggleItem('alert', true, 'there was an error. please try again', true)
};
</script>

<section class="form">
  <h2 class="section-title">
    {#if isMember}
      sign in
    {:else}
      register
    {/if}
  </h2>
  <form class="login-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-control">
      <label for="email">email</label>
      <input type="email" id="email" bind:value={email} />
    </div>
    <div class="form-control">
      <label for="password">password</label>
      <input type="password" id="password" bind:value={password} />
    </div>
    {#if !isMember}
      <div class="form-control">
        <label for="username">username</label>
        <input type="text" id="username" bind:value={username} />
      </div>
    {/if}
    {#if isEmpty}
      <p class="form-empty">please fill out the form inputs</p>
    {/if}
    <button
      class="btn btn-block btn-primary"
      type="submit"
      disabled={isEmpty}
      class:disabled={isEmpty}>submit</button
    >
    {#if isMember}
      <p class="register-link">
        need to register?<button type="button" on:click={toggleMember}
          >click here</button
        >
      </p>
    {:else}
      <p class="register-link">
        already a member? <button type="button" on:click={toggleMember}
          >click here</button
        >
      </p>
    {/if}
  </form>
</section>
