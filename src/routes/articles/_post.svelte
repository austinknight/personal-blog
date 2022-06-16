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
</style>

<div class="content-container">
  <div />
  <article>
    <header>
      <h1>{title}</h1>
      <div class="dates">
        <p class="medium-text publish-date"><b>Published:</b> {format(new Date(date), 'LLL dd, yyyy')}</p>
      </div>
    </header>

    <slot />
  </article>
</div>