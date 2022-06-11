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
    flex: 1;
  }

  ul {
    margin: 0;
    display: flex;
    padding: 0;
  }

  li {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
    border-bottom: 2px solid var(--color-link-text);
    padding-bottom: 2px;
    margin-right: 50px;
  }

  @media (max-width: 900px) {
    li {
      margin-right: 20px;
    }
  }

  a {
    padding-bottom: 4px;
  }
</style>

<footer>
  <div class="content-container">
    <div />
    <nav>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/contact">Say Hi</a>
        </li>
      </ul>
    </nav>
  </div>
</footer>