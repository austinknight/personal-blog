<script type="ts">
  import { format } from 'date-fns'

  import type { Post } from '$lib/types'
  
  export let posts: Post[] = [];
</script>

<style>
  .post-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 65px;
  }
  .post-date {
    font-style: italic;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 5px;
  }

  .post-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 5px;
  }

  a:hover {
    border-bottom: 2px solid var(--color-link-text);
  }
</style>

<ul>
  {#each posts as post}
    <li class="post-item">
      <span class="post-date">{format(new Date(post.meta.date), 'LLL dd, yyyy')}</span>
      <h3 class="post-title">
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h3>
      <p>{post.meta.preview}</p>
    </li>
  {/each}
</ul>