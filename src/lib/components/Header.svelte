<script>
  import comment from '$lib/assets/comment.png';
  import twitter from '$lib/assets/twitter.png';
  import { page } from '$app/stores';

  $: activeRoute = $page.routeId;
</script>

<header>
  <div class="content-container">
    <div />
    <div>
      <nav>
        <ul>
          <li>
            <a class:active={activeRoute === ''} href="/">Home</a>
          </li>
          <li>
            <a class:active={activeRoute === 'articles'} href="/articles">Articles</a>
          </li>
          <li>
            <a class:active={activeRoute === 'about'} href="/about">About</a>
          </li>
          <li>
            <a href="https://twitter.com/austinknight">Say Hi<img class="comment-icon" src={comment} alt="comment icon" /></a>
          </li>
        </ul>
        <a class="twitter-icon" href="https://twitter.com/austinknight"><img src={twitter} alt="Twitter icon" /></a>
      </nav>
    </div>
  </div>
</header>

<style>
  header {
    padding: 50px 0 50px 0;
    margin: 0 auto;
    max-width: 1280px;
  }

  @media (max-width: 900px) {
    header {
      padding: 25px 0;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    nav {
      flex-direction: column;
    }

    .twitter-icon {
      margin-top: 15px;
    }
  }

  ul {
    margin: 0;
    display: flex;
    padding: 0;
  }

  li {
    font-weight: 500;
    font-size: 2rem;
    line-height: 3rem;
    padding-bottom: 2px;
    margin-right: 50px;
  }

  @media (max-width: 900px) {
    li {
      margin-right: 20px;
    }
  }

  a {
    border-bottom: 2px solid var(--color-link-text);
    position: relative;
  }

  a:hover,
  .active {
    color: var(--color-body-text);
    border-bottom-color: var(--color-body-text);
  }

  .comment-icon {
    position: absolute;
    width: 35px;
    height: 35px;
    top: -20px;
    right: -35px;
  }

  .twitter-icon {
    border-bottom: none;
  }
  .twitter-icon img {
    width: 29px;
    height: 29px;
  }


</style>