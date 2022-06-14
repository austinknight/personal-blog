<script>
  import photo from '$lib/assets/austin.png';
</script>

<style>
  .home-banner {
    margin-bottom: 110px;
  }
  img {
    width: 175px;
    height: 175px;
    margin-right: 55px
  }

  @media (max-width: 900px) {
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 25px;
    }
  }
</style>

<div class="content-container home-banner">
  <img src={photo} alt="Austin Knight" />
  <div class="content">
    <h1>I'm Austin Knight, a frontend software engineer, team lead, washed-up designer, and weekend home-remodeler</h1>
    <p>Among other things...</p>
  </div>
</div>