<script type="ts">
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import '$lib/styles/resets.css'
  import '$lib/styles/style.css'
</script>

<Header />

<main>
  <slot />
</main>

<Footer />