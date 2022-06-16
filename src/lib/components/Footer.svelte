<script>
  import { page } from '$app/stores';

  $: activeRoute = $page.routeId;
</script>

<style>
  footer {
    padding: 50px 0 75px 0;
    margin: 0 auto;
    max-width: 1280px;
  }

  @media (max-width: 900px) {
    footer {
      padding: 25px 0;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
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
  }

  a:hover {
    color: var(--color-body-text);
    border-bottom-color: var(--color-body-text);
  }

  .copyright {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
  }
</style>

<footer>
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
            <a href="https://twitter.com/austinknight">Say Hi</a>
          </li>
        </ul>
        <p class="copyright">&copy;2022 Austin Knight</p>
      </nav>
    </div>
  </div>
</footer>