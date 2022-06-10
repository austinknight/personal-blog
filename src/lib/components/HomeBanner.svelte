<script>
  import photo from '$lib/assets/austin.png';
</script>

<div class="wrapper">
  <img src={photo} alt="Austin Knight" />
  <div class="content">
    <h1>I'm Austin Knight, a frontend software engineer, washed-up designer, and weekend home-remodeler</h1>
    <p>Among other things...</p>
  </div>
</div>

<style>
  img {
    width: 175px;
    height: 175px;
    margin-right: 55px
  }

  h1 {
    margin-bottom: var(--spacing-15);
  }

  .wrapper {
    display: grid;
    grid-template-columns: 175px 2fr;
    grid-column-gap: 50px;
    grid-row-gap: 65px;
  }
</style>