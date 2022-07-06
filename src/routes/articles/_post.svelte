<script>
  import { format } from 'date-fns'

  export let title = '';
  export let date = '';
</script>

<style>
  .dates {
    display: inline-block;
    border-bottom: 3px dashed var(--color-yellow);
    padding-bottom: 5px;
  }
  .publish-date {
    margin-bottom: 0;
  }

  header {
    margin-bottom: 50px;
  }

  :global(.post-content ul) {
    padding-left: 40px;
  }
  :global(.post-content ul li) {
    list-style: disc;
  }

  code {
    font-size: .8em;
    background: hsla(var(--lightBlueHSL),.1);
    padding: 0.2em 0.3em;
    border-radius: 2px;
    border: 1px solid hsla(var(--lightBlueHSL),.2);
    line-height: 1!important;
    white-space: nowrap;
  }
</style>

<div class="content-container">
  <div />
  <article class="post-content">
    <header>
      <h1>{title}</h1>
      <div class="dates">
        <p class="medium-text publish-date"><b>Published:</b> {format(new Date(date), 'LLL dd, yyyy')}</p>
      </div>
    </header>

    <slot />
  </article>
</div>